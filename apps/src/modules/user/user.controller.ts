import { Role, User } from '@libs/generated/prisma-mysql';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { CurrentUser } from 'libs/common/decorators/current-user.decorator';
import { JwtAuthGuard } from 'libs/common/guards/jwt-auth.guard';
import { RolesGuard } from 'libs/common/guards/roles.guard';
import { Roles } from '@libs/common/decorators/roles.decorator';
import { UserService } from '@/modules/user/user.service';
import {
  CreateBrandManagerDto,
  CreateCinemaManagerDto,
  CreateCounterStaffDto,
  UpdatePasswordDto,
  UpdateStatusdDto,
  UpdateUserDto,
} from '@/modules/user/dto/index';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@CurrentUser() currentUser) {
    return currentUser;
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post('create-brand-manager')
  @Roles(Role.SUPER_ADMIN)
  @HttpCode(HttpStatus.CREATED)
  async createBrandManager(
    @Body() createBrandManagerDto: CreateBrandManagerDto,
  ) {
    return await this.userService.createBrandManagerUser(createBrandManagerDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post('create-cinema-manager')
  @Roles(Role.BRAND_MANAGER)
  @HttpCode(HttpStatus.CREATED)
  async createCinemaManager(
    @Body() createCinemaManagerDto: CreateCinemaManagerDto,
    @CurrentUser() currentUser: User,
  ) {
    return await this.userService.createCinemaManagerUser(
      createCinemaManagerDto,
      currentUser,
    );
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post('create-counter-staff')
  @Roles(Role.CINEMA_MANAGER)
  @HttpCode(HttpStatus.CREATED)
  async createCounterStaff(
    @Body() createCounterStaffDto: CreateCounterStaffDto,
    @CurrentUser() currentUser: User,
  ) {
    return await this.userService.createCounterStaffUser(
      createCounterStaffDto,
      currentUser,
    );
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('find-super-admin')
  @Roles(Role.SUPER_ADMIN)
  @HttpCode(HttpStatus.OK)
  async findSuperAdmin() {
    return await this.userService.findSuperAdminUser();
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('find-brand-manager')
  @Roles(Role.BRAND_MANAGER)
  @HttpCode(HttpStatus.OK)
  async findBrandManager(@CurrentUser() currentUser: User) {
    return await this.userService.findBrandManagerUser(currentUser);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('find-cinema-manager')
  @Roles(Role.CINEMA_MANAGER)
  @HttpCode(HttpStatus.OK)
  async findCinemaManager(@CurrentUser() currentUser: User) {
    return await this.userService.findCinemaManagerUser(currentUser);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Patch('update-password')
  @Roles(
    Role.SUPER_ADMIN,
    Role.BRAND_MANAGER,
    Role.CINEMA_MANAGER,
    Role.COUNTER_STAFF,
  )
  @HttpCode(HttpStatus.CREATED)
  async updateUserPassword(
    @Body() updatePasswordDto: UpdatePasswordDto,
    @CurrentUser() currentUser: User,
  ) {
    return await this.userService.updateUserPassword(
      updatePasswordDto,
      currentUser,
    );
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Patch('update-status')
  @Roles(Role.SUPER_ADMIN, Role.BRAND_MANAGER, Role.CINEMA_MANAGER)
  @HttpCode(HttpStatus.OK)
  async updateUserStatus(
    @Body() updateStatusdDto: UpdateStatusdDto,
    @CurrentUser() currentUser: User,
  ) {
    return await this.userService.updateUserStatus(
      updateStatusdDto,
      currentUser,
    );
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('search')
  @Roles(Role.SUPER_ADMIN, Role.BRAND_MANAGER, Role.CINEMA_MANAGER)
  @HttpCode(HttpStatus.OK)
  async searchUser(
    @Query('keyword') keyword: string,
    @CurrentUser() currentUser: User,
  ) {
    return await this.userService.searchUser(keyword, currentUser);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Patch('/me')
  @Roles(Role.USER, Role.REVIEWER)
  @HttpCode(HttpStatus.OK)
  async updateUser(
    @Body() updateUserDto: UpdateUserDto,
    @CurrentUser() currentUser: User,
  ) {
    return await this.userService.updateUser(updateUserDto, currentUser);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get(':slug')
  @Roles(Role.USER, Role.REVIEWER)
  @HttpCode(HttpStatus.OK)
  async findUserByUsername(
    @Param('slug') slug: string,
  ) {
    return await this.userService.findUserByUsername(slug);
  }

}
