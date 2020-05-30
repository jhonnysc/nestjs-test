import { Controller, Body, Post } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { UserLoginDto } from '../dtos';
import { Validation } from '@app/utils/pipes';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  @Validation()
  async login(@Body() user_login: UserLoginDto) {
    return this.authService.login(user_login);
  }
}
