import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCounterStaffDto {
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

  @ApiProperty({ example: 'CGV Vincom Quang Trung' })
  @IsNotEmpty({ message: 'Counter name is required' })
  @IsString({ message: 'Counter name must be a string' })
  nameCounter: string;
}
