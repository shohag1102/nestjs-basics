/* eslint-disable prettier/prettier */
import {
  IsBoolean,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

/* eslint-disable prettier/prettier */
export class CreateUserDto {
  @IsInt()
  id: number;
  @Length(4, 20)
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString({ message: 'Must be a string' })
  @IsEmail({}, { message: 'Not a valid email' })
  email: string;
  @IsBoolean()
  isMarried: boolean;
  @IsString()
  @IsOptional()
  gender?: string;
}
