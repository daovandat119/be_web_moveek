import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaMysqlModule } from '@/prisma-mysql/prisma.module';

@Module({
  imports: [PrismaMysqlModule],
  controllers: [UserController],
  providers: [UserService],
})

export class UserModule {}
