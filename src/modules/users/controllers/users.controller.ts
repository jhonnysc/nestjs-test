import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  Get,
  Query,
} from "@nestjs/common";
import { CreateUserDto, UserGetDto } from "../dtos";
import { UserService } from "../services";
import { Validation } from "@app/utils/pipes";

@Controller("users")
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() user_dto: CreateUserDto) {
    return this.userService.create(user_dto);
  }

  @Get()
  @Validation()
  get(@Query() query: UserGetDto) {
    return this.userService.get(query);
  }
}
