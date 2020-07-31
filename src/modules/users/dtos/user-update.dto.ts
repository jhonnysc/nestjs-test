import {
  IsString,
  IsNotEmpty,
  IsEmail,
  Matches,
  IsNumber,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
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
}
