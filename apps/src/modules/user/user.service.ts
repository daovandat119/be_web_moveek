import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaMysqlService } from '@/prisma-mysql/prisma.service';
import {
  CreateBrandManagerDto,
  CreateCinemaManagerDto,
  CreateCounterStaffDto,
  UpdatePasswordDto,
  UpdateStatusdDto,
  UpdateUserDto,
} from '@/modules/user/dto/index';
import { comparePassword, hashPassword } from '@libs/utils/auth.util';
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

  async checkUserExist(id: number) {
    const user = await this.prismaMysql.user.findUnique({
      where: { id },
    });

    if (!user) throw new NotFoundException('User không tồn tại');

    return user;
  }

  async findByEmail(email: string) {
    return await this.prismaMysql.user.findUnique({ where: { email } });
  }

  async createBrandManagerUser(createBrandManagerDto: CreateBrandManagerDto) {
    const { username, email, password, nameCinemaBrand, logo } =
      createBrandManagerDto;

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

    return await this.prismaMysql.user.create({
      data: {
        username: username,
        slug: slugify(username),
        email: email,
        role: Role.BRAND_MANAGER,
        brandId: createCinemaBrand.id,
        password: await hashPassword(password),
        emailVerified: true,
        status: Status.ACTIVE,
      },
    });
  }

  async createCinemaManagerUser(
    createCinemaManagerDto: CreateCinemaManagerDto,
    currentUser: User,
  ) {
    const {
      username,
      email,
      password,
      nameCinemaBrand,
      address,
      map_link,
      description,
      provinceId,
    } = createCinemaManagerDto;

    const [existCinema, brand] = await Promise.all([
      this.prismaMysql.cinema.findUnique({
        where: { name: nameCinemaBrand },
      }),
      this.prismaMysql.user.findUnique({
        where: { id: currentUser.id },
        include: { brand: true },
      }),
    ]);

    if (existCinema) throw new BadRequestException('Rạp đã tồn tại');

    if (!brand?.brand) throw new NotFoundException('CinemaBrand không tồn tại');

    const createCinema = await this.prismaMysql.cinema.create({
      data: {
        name: nameCinemaBrand,
        slug: slugify(nameCinemaBrand),
        address: address,
        status: Status.ACTIVE,
        mapLink: map_link,
        provinceId: provinceId,
        brandId: brand?.brand?.id!,
        description: description,
      },
    });

    return await this.prismaMysql.user.create({
      data: {
        username: username,
        slug: slugify(username),
        email: email,
        role: Role.CINEMA_MANAGER,
        cinemaId: createCinema.id,
        password: await hashPassword(password),
        emailVerified: true,
        status: Status.ACTIVE,
      },
    });
  }

  async createCounterStaffUser(
    createCounterStaffDto: CreateCounterStaffDto,
    currentUser: User,
  ) {
    const { username, email, password, nameCounter } = createCounterStaffDto;

    const [existCounter, cinema] = await Promise.all([
      this.prismaMysql.counter.findUnique({
        where: { name: nameCounter },
      }),
      this.prismaMysql.user.findUnique({
        where: { id: currentUser.id },
        include: { cinema: true },
      }),
    ]);

    if (existCounter) throw new BadRequestException('Quầy đã tồn tại');

    const counter = await this.prismaMysql.counter.create({
      data: {
        name: nameCounter,
        slug: slugify(nameCounter),
        cinemaId: cinema?.cinema?.id!,
      },
    });

    return await this.prismaMysql.user.create({
      data: {
        username: username,
        slug: slugify(username),
        email: email,
        role: Role.COUNTER_STAFF,
        counterId: counter.id,
        password: await hashPassword(password),
        emailVerified: true,
        status: Status.ACTIVE,
      },
    });
  }

  async findSuperAdminUser() {
    return await this.prismaMysql.user.findMany({
      where: { role: Role.BRAND_MANAGER },
      include: {
        brand: true,
      },
    });
  }

  async findBrandManagerUser(currentUser: User) {
    const user = await this.prismaMysql.user.findUnique({
      where: { id: currentUser.id },
      include: {
        brand: true,
      },
    });

    if (!user) throw new NotFoundException('User không tồn tại');

    const cinemasOfBrand = await this.prismaMysql.cinema.findMany({
      where: { brandId: user?.brandId! },
      include: {
        users: true,
      },
    });

    const newCinemasOfBrand = cinemasOfBrand.map((cinema) => ({
      ...cinema,
      logo: user?.brand?.logo!,
    }));

    return newCinemasOfBrand;
  }

  async findCinemaManagerUser(currentUser: User) {
    const user = await this.checkUserExist(currentUser.id);

    const counterOfCinema = await this.prismaMysql.counter.findMany({
      where: { cinemaId: user?.cinemaId! },
      include: {
        users: true,
      },
    });

    return counterOfCinema;
  }

  private async checkPermissionToManageUser(currentUser: User) {
    if (currentUser.role === Role.SUPER_ADMIN) {
      return;
    }

    let allUserIds: number[] = [];

    if (currentUser.role === Role.BRAND_MANAGER) {
      const cinemas = await this.prismaMysql.cinema.findMany({
        where: { brandId: currentUser.id },
        include: { users: { select: { id: true } } },
      });
      allUserIds = cinemas.flatMap((cinema) =>
        cinema.users.map((user) => user.id),
      );
    } else if (currentUser.role === Role.CINEMA_MANAGER) {
      const counters = await this.prismaMysql.counter.findMany({
        where: { cinemaId: currentUser.id },
        include: { users: { select: { id: true } } },
      });
      allUserIds = counters.flatMap((counter) =>
        counter.users.map((user) => user.id),
      );
    } else {
      throw new ForbiddenException('Bạn không có quyền thực hiện thao tác này');
    }

    return allUserIds;
  }

  async updateUserPassword(
    updatePasswordDto: UpdatePasswordDto,
    currentUser: User,
  ) {
    const { userId, oldPassword, password, confirmPassword } =
      updatePasswordDto;

    if (password !== confirmPassword)
      throw new BadRequestException('Mật khẩu xác nhận không khớp');

    if (currentUser.role === Role.SUPER_ADMIN) {
      if (userId === currentUser.id)
        throw new BadRequestException(
          'Super Admin không thể tự đổi mật khẩu ở đây',
        );

      await this.checkUserExist(userId);

      await this.prismaMysql.user.update({
        where: { id: userId },
        data: { password: await hashPassword(password) },
      });
    } else {
      if (userId === currentUser.id) {
        const user = await this.checkUserExist(currentUser.id);

        const checkPassword = await comparePassword(
          oldPassword!,
          user.password,
        );
        if (!checkPassword) {
          throw new BadRequestException('Mật khẩu cũ không đúng');
        }

        await this.prismaMysql.user.update({
          where: { id: currentUser.id },
          data: { password: await hashPassword(password) },
        });
      } else {
        const allUserIds = await this.checkPermissionToManageUser(currentUser);

        if (!allUserIds?.includes(userId)) {
          throw new ForbiddenException(
            'Bạn không có quyền thao tác với user này',
          );
        }

        await this.prismaMysql.user.update({
          where: { id: userId },
          data: { password: await hashPassword(password) },
        });
      }
    }

    return { message: 'Cập nhật password thành công' };
  }

  async updateUserStatus(updateStatusDto: UpdateStatusdDto, currentUser: User) {
    const { userIds } = updateStatusDto;

    if (!userIds || userIds.length === 0) {
      throw new BadRequestException('Danh sách userIds không được để trống');
    }

    for (const id of userIds) {
      const user = await this.prismaMysql.user.findUnique({ where: { id } });

      if (!user) {
        throw new NotFoundException(`UserId ${id} không tồn tại`);
      }

      const allUserIds = await this.checkPermissionToManageUser(currentUser);

      if (!allUserIds?.includes(id)) {
        throw new ForbiddenException(
          'Bạn không có quyền thao tác với user này',
        );
      }

      await this.prismaMysql.user.update({
        where: { id },
        data: { status: user.status },
      });
    }

    return { message: 'Cập nhật trạng thái thành công' };
  }

  async searchUser(keyword: string, currentUser: User) {
    const allUserIds = await this.checkPermissionToManageUser(currentUser);

    const users = await this.prismaMysql.user.findMany({
      where: {
        ...(allUserIds!.length > 0 && { id: { in: allUserIds } }),
        fullName: {
          contains: keyword,
        },
      },
    });

    return users;
  }

  async updateUser(updateUserDto: UpdateUserDto, currentUser: User) {
    const { fullName, avatar, phone, provinceId } = updateUserDto;
    await this.prismaMysql.user.update({
      where: { id: currentUser.id },
      data: {
        fullName,
        avatar,
        phone,
        provinceId,
      },
    });

    return { message: 'Cập nhật thông tin thành công' };
  }

  async findUserByUsername(slug: string) {
    const user = await this.prismaMysql.user.findUnique({
      where: { slug: slug },
    });

    return user;
  }
}
