import { Module } from '@nestjs/common';
import { UserController } from '@/modules/user/user.controller';
import { UserService } from '@/modules/user/user.service';
import { PrismaMysqlModule } from '@/prisma-mysql/prisma.module';
import { CloudinaryModule } from '@/modules/upload/cloudinary.module';

@Module({
  imports: [PrismaMysqlModule, CloudinaryModule],
  controllers: [UserController],
  providers: [UserService],
})

export class UserModule {}
