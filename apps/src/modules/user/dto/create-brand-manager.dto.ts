import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBrandManagerDto {
  @ApiProperty({ example: 'cgvadmin01' })
  @IsNotEmpty({ message: 'Username is required' })
  username: string;

  @ApiProperty({ example: 'cgvadmin01@example.com' })
  @IsEmail({}, { message: 'Invalid email format' })
  email: string;

  @ApiProperty({
    example: 'password123',
    description: 'Mật khẩu có tối thiểu 6 ký tự',
  })
  @IsString({ message: 'Password phải là chuỗi' })
  @MinLength(6, { message: 'Password phải có ít nhất 6 ký tự' })
  @IsNotEmpty({ message: 'Password không được để trống' })
  password: string;

  @ApiProperty({
    example: 'CGV',
    description: 'Tên cụm rạp (Cinema Brand Name)',
  })
  @IsNotEmpty({ message: 'Cinema brand name is required' })
  nameCinemaBrand: string;

  @ApiProperty({
    example: 'https://domain.com/logo.png',
    description: 'Link logo cụm rạp (có thể bỏ trống)',
    required: false,
  })
  @IsOptional()
  logo?: string;
}
