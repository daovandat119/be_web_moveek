import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class VerifyCodeDto {
  @ApiProperty({ example: 'user@example.com', description: 'Email đăng ký tài khoản' })
  @IsEmail({}, { message: 'Email không hợp lệ' })
  @IsNotEmpty({ message: 'Email không được để trống' })
  email: string;

  @ApiProperty({ example: 'abc123-xyz456', description: 'Mã xác minh được gửi tới email' })
  @IsString({ message: 'CodeId phải là chuỗi' })
  @IsNotEmpty({ message: 'CodeId không được để trống' })
  codeId: string;
}
