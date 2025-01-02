/* eslint-disable prettier/prettier */
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

/* eslint-disable prettier/prettier */
export class CreateUserDto {
  @Length(4, 20)
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString({ message: 'Must be a string' })
  @IsEmail({}, { message: 'Not a valid email' })
  email: string;
  @Length(2, 5)
  @IsString()
  password: string;
  @IsBoolean()
  isMarried: boolean;
  @IsString()
  @IsOptional()
  gender?: string;
}
