import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { PrismaMysqlService } from '@/prisma-mysql/prisma.service';
import {
  CreateByBrandManagerDto,
  CreateCinemaManagerUser,
  CreateCounterStaffDto,
} from '@/modules/user/dto/index';
import { hashPassword, generateRandomPassword } from '@libs/utils/auth.util';
import { Role, Status, User } from '@libs/generated/prisma-mysql';
import { slugify } from '@libs/utils/slugify';

@Injectable()
export class UserService {
  constructor(private prismaMysql: PrismaMysqlService) {}

  async findByUsername(username: string) {
    return await this.prismaMysql.user.findUnique({
      where: { username: username },
    });
  }

  async findById(id: number) {
    return await this.prismaMysql.user.findUnique({
      where: { id },
    });
  }

  async updateRefreshToken(userId: number, refreshToken: string) {
    return await this.prismaMysql.user.update({
      where: { id: userId },
      data: { refreshToken: refreshToken },
    });
  }

  async clearRefreshToken(userId: number) {
    return await this.prismaMysql.user.update({
      where: { id: userId },
      data: { refreshToken: null },
    });
  }

  async findByEmail(email: string) {
    return await this.prismaMysql.user.findUnique({ where: { email } });
  }

  async createUser(data: any) {
    return await this.prismaMysql.user.create({ data });
  }

  async createBrandManagerUser(
    createByBrandManagerDto: CreateByBrandManagerDto,
  ) {
    const { username, email, nameCinemaBrand, logo } = createByBrandManagerDto;

    console.log(createByBrandManagerDto);

    const [userByUsername, userByEmail] = await Promise.all([
      this.findByUsername(username),
      this.findByEmail(email),
    ]);

    if (userByUsername) throw new BadRequestException('Username đã tồn tại');

    if (userByEmail) throw new BadRequestException('Email đã tồn tại');

    const userCinemaBrand = await this.prismaMysql.cinemaBrand.findUnique({
      where: { name: nameCinemaBrand },
    });

    if (userCinemaBrand) throw new BadRequestException('Hãng đã tồn tại');

    const createCinemaBrand = await this.prismaMysql.cinemaBrand.create({
      data: {
        name: nameCinemaBrand,
        slug: slugify(nameCinemaBrand),
        logo: logo,
      },
    });

    return await this.createUser({
      username: username,
      email: email,
      role: Role.BRAND_MANAGER,
      brandId: createCinemaBrand.id,
      password: await hashPassword(generateRandomPassword()),
      emailVerified: true,
      status: Status.ACTIVE,
    });
  }

  async createCinemaManagerUser(
    createCinemaManagerUser: CreateCinemaManagerUser,
    currentUser: User,
  ) {
    const {
      username,
      email,
      nameCinemaBrand,
      address,
      map_link,
      description,
      provinceId,
    } = createCinemaManagerUser;

    if (currentUser.role !== Role.BRAND_MANAGER)
      throw new ForbiddenException('Bạn không có quyền thực hiện thao tác này');

    const userCinema = await this.prismaMysql.cinema.findUnique({
      where: {
        name: nameCinemaBrand,
      },
    });

    if (userCinema) throw new BadRequestException('Rạp đã tồn tại');

    const createCinema = await this.prismaMysql.cinema.create({
      data: {
        name: nameCinemaBrand,
        slug: slugify(nameCinemaBrand),
        address: address,
        status: Status.ACTIVE,
        map_link: map_link,
        provinceId: provinceId,
        brandId: currentUser.id,
        description: description,
      },
    });

    return await this.createUser({
      username: username,
      email: email,
      role: Role.CINEMA_MANAGER,
      cinemaId: createCinema.id,
      password: await hashPassword(generateRandomPassword()),
      emailVerified: true,
      status: Status.ACTIVE,
    });
  }

  async createCounterStaffUser(
    createCounterStaffDto: CreateCounterStaffDto,
    currentUser: User,
  ) {
    const { username, email } = createCounterStaffDto;

    if (currentUser.role !== Role.CINEMA_MANAGER)
      throw new ForbiddenException('Bạn không có quyền thực hiện thao tác này');

    const cinema = await this.prismaMysql.cinema.findUnique({
      where: { id: currentUser.id },
    });

    if (!cinema) throw new BadRequestException('Rạp không tồn tại');

    return await this.createUser({
      username: username,
      email: email,
      role: Role.COUNTER_STAFF,
      cinemaId: cinema.id,
      password: await hashPassword(generateRandomPassword()),
      emailVerified: true,
      status: Status.ACTIVE,
    });
  }
}
