import { AppRequest } from '@app/common/interfaces/request';
import { PermissionGuard } from '@app/modules/permissions/decorators';
import { Validation } from '@app/utils/pipes';

import {
  Controller,
  Post,
  Body,
  Get,
  Query,
  Put,
  Req,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';

import { CreateUserDto, UserGetDto, UpdateUserDto } from '../dtos';
import { UserParamDto } from '../dtos/user.param.dto';
import { UserService } from '../services';

@Controller('perms/developers')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @Validation()
  async create(@Body() user_dto: CreateUserDto) {
    return this.userService.create(user_dto);
  }

  @Get()
  @Validation()
  @PermissionGuard('users', 'read', 'any')
  get(@Query() query: UserGetDto) {
    return this.userService.get({ ...query, route: '/developers' });
  }

  @Put()
  @Validation()
  @PermissionGuard('users', 'update', 'own')
  updateOwn(
    @Body() user_dto: UpdateUserDto,
    @Req() request: Partial<AppRequest>,
  ) {
    return this.userService.updateOwn(user_dto, request.user);
  }

  @Put('/:id')
  @Validation()
  @PermissionGuard('users', 'update', 'any')
  updateUser(@Body() user_dto: UpdateUserDto, @Param() { id }: UserParamDto) {
    return this.userService.updateAny(user_dto, id);
  }

  @Get('/:id')
  @Validation()
  @PermissionGuard('users', 'read', 'any')
  getAnyUser(@Param() { id }: UserParamDto) {
    return this.userService.getAnyUser(id);
  }

  @Delete('/:id')
  @Validation()
  @HttpCode(204)
  @PermissionGuard('users', 'read', 'any')
  deleteAnyUser(@Param() { id }: UserParamDto) {
    return this.userService.deleteAnyUser(id);
  }
}
