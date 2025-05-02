import { Module } from '@nestjs/common';
import { CloudinaryProvider } from '@/modules/upload/cloudinary.provider';
import { CloudinaryService } from '@/modules/upload/cloudinary.service';

@Module({
  providers: [CloudinaryProvider, CloudinaryService],
  exports: [CloudinaryProvider, CloudinaryService]
})
export class CloudinaryModule {}
