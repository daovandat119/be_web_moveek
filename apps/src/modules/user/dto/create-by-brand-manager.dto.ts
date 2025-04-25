import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateByBrandManagerDto {
  @ApiProperty({ example: 'cgvadmin01' })
  @IsNotEmpty({ message: 'Username is required' })
  username: string;

  @ApiProperty({ example: 'cgvadmin01@example.com' })
  @IsEmail({}, { message: 'Invalid email format' })
  email: string;

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
