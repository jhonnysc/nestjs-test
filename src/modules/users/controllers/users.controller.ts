import { ACGuard, UseRoles } from 'nest-access-control';

import { AppRequest } from '@app/common/interfaces/request';
import { JwtAuthGuard } from '@app/modules/auth/guards';
import { Validation } from '@app/utils/pipes';

import {
  Controller,
  Post,
  Body,
  Get,
  Query,
  UseGuards,
  Put,
  Req,
} from '@nestjs/common';

import { CreateUserDto, UserGetDto, UpdateUserDto } from '../dtos';
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
  @UseGuards(JwtAuthGuard, ACGuard)
  @UseRoles({ resource: 'users', action: 'read', possession: 'any' })
  get(@Query() query: UserGetDto) {
    return this.userService.get({ ...query, route: '/users' });
  }

  @Put()
  @Validation()
  @UseGuards(JwtAuthGuard, ACGuard)
  @UseRoles({ resource: 'users', action: 'update', possession: 'own' })
  updateOwn(@Body() user_dto: UpdateUserDto, @Req() request: AppRequest) {
    return this.userService.updateOwn(user_dto, request.user);
  }
}
