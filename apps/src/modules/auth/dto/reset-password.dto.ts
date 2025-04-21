import { IsString, MinLength } from 'class-validator';

export class ResetPasswordDto {
  @IsString()
  codeId: string;

  @IsString()
  @MinLength(6, { message: 'Mật khẩu tối thiểu 6 ký tự' })
  newPassword: string;
}