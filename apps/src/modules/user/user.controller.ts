import { Controller, Get, UseGuards } from '@nestjs/common';
import { CurrentUser } from 'libs/common/decorators/current-user.decorator';
import { JwtAuthGuard } from 'libs/common/guards/jwt-auth.guard';

@Controller('user')
export class UserController {
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@CurrentUser() user) {
    return user;
  }
}