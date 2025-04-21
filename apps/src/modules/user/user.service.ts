import { Injectable } from "@nestjs/common";
import { PrismaMysqlService } from '../../prisma-mysql/prisma.service';

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

}