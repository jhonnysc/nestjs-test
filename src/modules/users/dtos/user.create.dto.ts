import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

import { Roles } from '@app/modules/permissions/roles';

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

  roles: Roles[];
}
