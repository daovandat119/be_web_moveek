import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsInt,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCinemaManagerDto {
  @ApiProperty({ example: 'cgvadmin01' })
  @IsNotEmpty({ message: 'Username is required' })
  @IsString()
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
  @IsOptional()
  @IsString()
  nameCinemaBrand: string;

  @ApiProperty({ example: '268 Lý Thường Kiệt, Quận 10, TP.HCM' })
  @IsNotEmpty({ message: 'Address is required' })
  @IsString()
  address: string;

  @ApiProperty({
    example: 'https://goo.gl/maps/example',
    description: 'Link Google Maps',
  })
  @IsOptional()
  @IsString()
  map_link: string;

  @ApiProperty({ example: 79, description: 'ID của tỉnh/thành phố' })
  @IsNotEmpty({ message: 'Province ID is required' })
  @IsInt()
  provinceId: number;

  @ApiProperty({
    example:
      'Cụm rạp lớn tại trung tâm TP.HCM, phục vụ hơn 1000 lượt khách/ngày.',
    description: 'Mô tả cụm rạp',
  })
  @IsOptional()
  @IsString()
  description: string;
}
