import { AppRequest } from '@app/common/interfaces/request';
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

@Controller('developers')
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
    return this.userService.get({ ...query, route: '/developers' });
  }

  @Put()
  @Validation()
  updateOwn(
    @Body() user_dto: UpdateUserDto,
    @Req() request: Partial<AppRequest>,
  ) {
    return this.userService.updateOwn(user_dto, request.user);
  }

  @Put('/:id')
  @Validation()
  updateUser(@Body() user_dto: UpdateUserDto, @Param() { id }: UserParamDto) {
    return this.userService.updateAny(user_dto, id);
  }

  @Get('/:id')
  @Validation()
  getAnyUser(@Param() { id }: UserParamDto) {
    return this.userService.getAnyUser(id);
  }

  @Delete('/:id')
  @Validation()
  @HttpCode(204)
  deleteAnyUser(@Param() { id }: UserParamDto) {
    return this.userService.deleteAnyUser(id);
  }
}
