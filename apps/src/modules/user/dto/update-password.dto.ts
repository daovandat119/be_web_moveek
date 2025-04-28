import { IsNotEmpty, IsString, IsNumber, MinLength } from 'class-validator';

export class UpdatePasswordDto {
  @IsNumber({}, { message: 'userId phải là số' })
  @IsNotEmpty({ message: 'userId không được để trống' })
  userId: number;

  @IsString({ message: 'Password phải là chuỗi' })
  @MinLength(6, { message: 'Password phải có ít nhất 6 ký tự' })
  @IsNotEmpty({ message: 'Password không được để trống' })
  oldPassword?: string;

  @IsString({ message: 'Password phải là chuỗi' })
  @MinLength(6, { message: 'Password phải có ít nhất 6 ký tự' })
  @IsNotEmpty({ message: 'Password không được để trống' })
  password: string;

  @IsString({ message: 'Confirm Password phải là chuỗi' })
  @MinLength(6, { message: 'Confirm Password phải có ít nhất 6 ký tự' })
  @IsNotEmpty({ message: 'Confirm Password không được để trống' })
  confirmPassword?: string;
}
