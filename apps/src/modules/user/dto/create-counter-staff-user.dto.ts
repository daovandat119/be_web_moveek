import { IsEmail, IsNotEmpty, IsOptional, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCounterStaffDto {
  @ApiProperty({ example: 'cgvadmin01' })
  @IsNotEmpty({ message: 'Username is required' })
  username: string;

  @ApiProperty({ example: 'cgvadmin01@example.com' })
  @IsEmail({}, { message: 'Invalid email format' })
  email: string;
}
