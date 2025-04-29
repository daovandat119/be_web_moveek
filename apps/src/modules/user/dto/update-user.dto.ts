import { IsOptional, IsString, IsNumber, IsUrl } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiPropertyOptional({
    example: 'Đào Văn Đạt',
    description: 'Họ và tên đầy đủ của người dùng',
  })
  @IsOptional()
  @IsString({ message: 'Full name phải là chuỗi' })
  fullName?: string;

  @ApiPropertyOptional({
    example: 'https://domain.com/avatar.jpg',
    description: 'Đường dẫn URL của ảnh đại diện',
  })
  @IsOptional()
  @IsUrl({}, { message: 'Avatar phải là URL hợp lệ' })
  avatar?: string;

  @ApiPropertyOptional({
    example: 1,
    description: 'ID tỉnh/thành (ProvinceId) người dùng thuộc về',
  })
  @IsOptional()
  @IsNumber({}, { message: 'Province ID phải là số' })
  provinceId?: number;

  @ApiPropertyOptional({
    example: '0912345678',
    description: 'Số điện thoại của người dùng',
  })
  @IsOptional()
  @IsString({ message: 'Phone phải là chuỗi' })
  phone?: string;
}
