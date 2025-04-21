import { Body, Controller, Post, Put, Req, Res } from '@nestjs/common';
import {
  RegisterDto,
  ResendCodeDto,
  VerifyCodeDto,
  LoginDto,
  ResetPasswordDto,
} from '@/modules/auth/dto/index';
import { AuthService } from '@/modules/auth/auth.service';
import { Request, Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto, @Res() res: Response) {
    const user = await this.authService.validateUser(loginDto);
    const result = await this.authService.login(user, res);
    return res.json(result);
  }

  @Post('refresh')
  async refresh(@Req() req: Request, @Res() res: Response) {
    const result = await this.authService.refresh(req, res);
    return res.json(result);
  }

  @Post('logout')
  async logout(@Req() req: Request, @Res() res: Response) {
    await this.authService.logout(req, res);
  }

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    await this.authService.register(registerDto);
  }

  @Post('/verify-code')
  async verify(@Body() verifyCodeDto: VerifyCodeDto) {
    const verifyUser = await this.authService.verifyCode(verifyCodeDto);
    return verifyUser;
  }

  @Post('/resend-code')
  async resendCode(@Body() resendCodeDto: ResendCodeDto) {
    const resendUser = await this.authService.resendCode(resendCodeDto);
    return resendUser;
  }

  @Post('/forgot-password')
  async forgotPassword(@Body() resendCodeDto: ResendCodeDto) {
    const resetPassword = await this.authService.forgotPassword(resendCodeDto);
    return resetPassword;
  }

  @Put('/reset-password')
  async resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
    await this.authService.resetPassword(resetPasswordDto);
  }
}
