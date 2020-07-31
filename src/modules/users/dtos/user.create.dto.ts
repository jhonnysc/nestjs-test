import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsNumber,
  Matches,
  IsEnum,
} from 'class-validator';

import { Roles } from '@app/modules/permissions/roles';

import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  password: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  sex: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  hobby: string;

  @Matches(/^\d{4}\/\d{2}\/\d{2}$/)
  @IsNotEmpty()
  @ApiProperty()
  dayOfBirth: Date;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  age: number;

  @IsEnum(Roles, { each: true })
  @IsNotEmpty()
  @ApiProperty()
  roles: Roles[];
}
