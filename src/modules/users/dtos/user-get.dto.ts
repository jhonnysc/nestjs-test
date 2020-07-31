import { Transform } from 'class-transformer';
import {
  IsString,
  IsNumber,
  Max,
  IsOptional,
  IsNotEmpty,
} from 'class-validator';

import { ApiPropertyOptional } from '@nestjs/swagger';

export class UserGetDto {
  @IsNumber()
  @Max(1000)
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  @Transform(value => parseInt(value, 10))
  limit = 10;

  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  @Transform(value => parseInt(value, 10))
  page = 1;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiPropertyOptional()
  email?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiPropertyOptional()
  name?: string;

  route?: string;
}
