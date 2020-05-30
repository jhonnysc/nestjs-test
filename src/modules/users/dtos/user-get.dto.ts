import {
  IsString,
  IsNumber,
  Max,
  IsOptional,
  IsNotEmpty,
} from "class-validator";
import { Transform } from "class-transformer";

export class UserGetDto {
  @IsNumber()
  @Max(1000)
  @IsOptional()
  @Transform((value) => parseInt(value, 10))
  limit = 10;

  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  @Transform((value) => parseInt(value, 10))
  page = 1;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  email?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name?: string;

  route?: string;
}
