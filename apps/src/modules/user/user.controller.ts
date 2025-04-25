import { Role, User } from '@libs/generated/prisma-mysql';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CurrentUser } from 'libs/common/decorators/current-user.decorator';
import { JwtAuthGuard } from 'libs/common/guards/jwt-auth.guard';
import { RolesGuard } from 'libs/common/guards/roles.guard';
import { Roles } from '@libs/common/decorators/roles.decorator';
import { UserService } from '@/modules/user/user.service';
import {
  CreateByBrandManagerDto,
  CreateCinemaManagerUser,
  CreateCounterStaffDto,
} from '@/modules/user/dto/index';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@CurrentUser() currentUser) {
    return currentUser;
  }

  @Post('create-brand-manager')
  @Roles(Role.SUPER_ADMIN)
  @HttpCode(HttpStatus.CREATED)
  async createBrandManager(
    @Body() createByBrandManagerDto: CreateByBrandManagerDto,
  ) {
    return this.userService.createBrandManagerUser(
      createByBrandManagerDto
    );
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post('create-cinema-manager')
  @Roles(Role.BRAND_MANAGER)
  @HttpCode(HttpStatus.CREATED)
  async createCinemaManager(
    @Body() createCinemaManagerUser: CreateCinemaManagerUser,
    @CurrentUser() currentUser: User,
  ) {
    return this.userService.createCinemaManagerUser(
      createCinemaManagerUser,
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
    return this.userService.createCounterStaffUser(
      createCounterStaffDto,
      currentUser,
    );
  }

  
}
