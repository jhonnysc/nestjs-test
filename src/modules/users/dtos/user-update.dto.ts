import {
  IsString,
  IsNotEmpty,
  IsEmail,
  Matches,
  IsNumber,
} from "class-validator";

export class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  sex: string;

  @IsString()
  @IsNotEmpty()
  hobby: string;

  @Matches(/^\d{4}\/\d{2}\/\d{2}$/)
  @IsNotEmpty()
  dayOfBirth: Date;

  @IsNumber()
  @IsNotEmpty()
  age: number;
}
