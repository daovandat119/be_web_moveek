import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Response, Request } from 'express';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaMysqlService } from '@/prisma-mysql/prisma.service';
import {
  comparePassword,
  generateVerificationCode,
  hashPassword,
  isCodeExpired,
  isCodeStillValid,
} from '@libs/utils/auth.util';
import { UserService } from '@/modules/user/user.service';
import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} from '@libs/utils/jwt.util';
import { successResponse } from '@libs/utils/response.util';
import {
  RegisterDto,
  ResendCodeDto,
  VerifyCodeDto,
  LoginDto,
  ResetPasswordDto,
} from '@/modules/auth/dto/index';
import { User } from '@libs/generated/prisma-mysql';
import { Status, Role } from '@libs/common/constants/index';
import { MailerService } from '@/modules/mailer/mailer.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaMysql: PrismaMysqlService,
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    private mailerService: MailerService,
  ) {}

  async validateUser(loginDto: LoginDto) {
    const { email, password } = loginDto;
    const user = await this.userService.findByEmail(email);

    if (!user) throw new BadRequestException('Tài khoản không tồn tại');

    const passwordMatch = await comparePassword(password, user.password);
    if (!passwordMatch) throw new BadRequestException('Mật khẩu không đúng');

    if (user.emailVerified == false) {
      throw new BadRequestException('Tài khoản chưa được kích hoạt');
    }

    if (user.status == Status.INACTIVE) {
      throw new BadRequestException('Tài khoản đã bị khóa');
    }

    return user;
  }

  async login(user: any, res: Response) {
    const payload = { sub: user.id, username: user.username, role: user.role };

    const accessToken = generateAccessToken(
      this.jwtService,
      this.configService,
      payload,
    );

    const refreshToken = generateRefreshToken(
      this.jwtService,
      this.configService,
      payload,
    );

    await this.userService.updateRefreshToken(payload.sub, refreshToken);

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: this.configService.get<string>('NODE_ENV') === 'production',
      sameSite: 'strict',
      maxAge: parseInt(
        this.configService.get<string>('COOKIE_REFRESH_MAX_AGE') || '604800000',
      ),
    });

    return { accessToken };
  }

  async refresh(req: Request, res: Response) {
    const refreshToken = req.cookies?.['refreshToken'];
    if (!refreshToken)
      throw new UnauthorizedException('No refresh token provided');

    try {
      const payload = verifyRefreshToken(
        this.jwtService,
        this.configService,
        refreshToken,
      );

      const user = await this.userService.findById(payload.sub);

      if (!user || user.refreshToken !== refreshToken)
        throw new UnauthorizedException('Invalid refresh token');

      const accessToken = generateAccessToken(
        this.jwtService,
        this.configService,
        {
          sub: user.id,
          username: user.username,
          role: user.role,
        },
      );

      return { accessToken };
    } catch (err) {
      throw new UnauthorizedException('Invalid or expired refresh token');
    }
  }

  async logout(req: Request, res: Response) {
    const refreshToken = req.cookies?.['refreshToken'];

    if (refreshToken) {
      try {
        const payload = verifyRefreshToken(
          this.jwtService,
          this.configService,
          refreshToken,
        );
        await this.userService.clearRefreshToken(payload.sub);
      } catch (err) {
        console.log(err);
      }
    }

    res.clearCookie('refreshToken', {
      httpOnly: true,
      secure: this.configService.get<string>('NODE_ENV') === 'production',
      sameSite: 'strict',
    });

    return res.status(200).json(successResponse('Logout successful'));
  }

  async register(registerDto: RegisterDto): Promise<User> {
    const { username, email, password } = registerDto;

    const [userByUsername, userByEmail] = await Promise.all([
      this.userService.findByUsername(username),
      this.userService.findByEmail(email),
    ]);

    if (userByUsername) {
      throw new BadRequestException('Username đã được sử dụng');
    }

    if (userByEmail) {
      throw new BadRequestException('Email đã được sử dụng');
    }

    const passwordHash = await hashPassword(password);

    const { codeId, codeExpired } = generateVerificationCode(5);

    const user = await this.userService.createUser({
      username,
      email,
      password: passwordHash,
      fullName: null,
      phone: null,
      region: null,
      avatar: null,
      balance: 0,
      role: Role.USER,
      codeId: codeId,
      codeExpired: codeExpired,
      status: Status.ACTIVE,
    });

    const template = 'register';
    this.mailerService.sendActivationEmail(email, username, codeId, template);

    return user;
  }

  async verifyCode(verifyCodeDto: VerifyCodeDto): Promise<User> {
    const { codeId, email } = verifyCodeDto;
    const user = await this.userService.findByEmail(email);

    if (user?.codeId != codeId) {
      throw new BadRequestException('Mã kích hoạt không đúng');
    }

    if (isCodeExpired(user.codeExpired)) {
      throw new BadRequestException('Mã kích hoạt đã hết hạn');
    }

    await this.prismaMysql.user.update({
      where: { id: user.id },
      data: {
        codeId: null,
        codeExpired: null,
        emailVerified: true,
      },
    });

    return user;
  }

  async resendCode(resendCodeDto: ResendCodeDto): Promise<User> {
    const { email } = resendCodeDto;

    const user = await this.userService.findByEmail(email);

    if (!user) {
      throw new BadRequestException('Email không tồn tại');
    }

    if (isCodeStillValid(user.codeExpired)) {
      throw new BadRequestException('Mã kích hoạt vẫn còn hiệu lực');
    }

    if (user.emailVerified) {
      throw new BadRequestException('Tài khoản đã được kích hoạt');
    }

    const { codeId, codeExpired } = generateVerificationCode(5);

    const template = 'register';
    this.mailerService.sendActivationEmail(
      user.email,
      user.username,
      codeId,
      template,
    );

    await this.prismaMysql.user.update({
      where: { id: user.id },
      data: {
        codeId: codeId,
        codeExpired: codeExpired,
      },
    });

    return user; 
  }

  async forgotPassword(resendCodeDto: ResendCodeDto): Promise<User> {
    const { email } = resendCodeDto;

    const user = await this.userService.findByEmail(email);

    if (!user) {
      throw new BadRequestException('Email không tồn tại');
    }
    const { codeId, codeExpired } = generateVerificationCode(24 * 60);

    const resetLink = `http://localhost:3000/reset-password?codeId=${codeId}`;

    const template = 'reset-password';
    this.mailerService.sendActivationEmail(
      user.email,
      user.username,
      resetLink,
      template,
    );

    await this.prismaMysql.user.update({
      where: { id: user.id },
      data: {
        codeId: codeId,
        codeExpired: codeExpired,
      },
    });

    return user;
  }

  async resetPassword(resetPasswordDto: ResetPasswordDto): Promise<void> {
    const { codeId, newPassword } = resetPasswordDto;
    const user = await this.prismaMysql.user.findFirst({
      where: {
        codeId: codeId,
        codeExpired: { gte: new Date() },
      },
    });

    if (!user) {
      throw new BadRequestException('CodeId không hợp lệ hoặc đã hết hạn');
    }

    const hashedPassword = await hashPassword(newPassword);

    await this.prismaMysql.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        codeId: null,
        codeExpired: null,
      },
    });
  }
}
