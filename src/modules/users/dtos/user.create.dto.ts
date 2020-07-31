import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsNumber,
  Matches,
  IsEnum,
} from "class-validator";

import { Roles } from "@app/modules/permissions/roles";

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

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

  @IsEnum(Roles, { each: true })
  @IsNotEmpty()
  roles: Roles[];
}
