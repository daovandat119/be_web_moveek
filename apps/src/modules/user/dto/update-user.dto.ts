import { IsArray, ArrayNotEmpty, IsNumber, IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateUserDto {
    @IsArray({ message: 'userIds phải là một mảng' })
    @ArrayNotEmpty({ message: 'userIds không được để trống' })
    @IsNumber({}, { each: true, message: 'Mỗi userId trong userIds phải là số' })
    @Type(() => Number)
    userIds: number[];
}
