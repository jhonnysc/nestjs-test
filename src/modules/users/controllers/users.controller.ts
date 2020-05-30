import { Validation } from '@app/utils/pipes';

import { Controller, Post, Body, Get, Query } from '@nestjs/common';

import { CreateUserDto, UserGetDto } from '../dtos';
import { UserService } from '../services';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @Validation()
  async create(@Body() user_dto: CreateUserDto) {
    return this.userService.create(user_dto);
  }

  @Get()
  @Validation()
  get(@Query() query: UserGetDto) {
    return this.userService.get({ ...query, route: '/users' });
  }
}
