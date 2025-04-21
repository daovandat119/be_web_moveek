import { Module } from '@nestjs/common';
import { PrismaMongoService } from './prisma.service';

@Module({
  providers: [PrismaMongoService],
  exports: [PrismaMongoService],
})
export class PrismaMongoModule {}
