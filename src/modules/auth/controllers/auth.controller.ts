import { Validation } from "@app/utils/pipes";

import { Controller, Body, Post } from "@nestjs/common";

import { UserLoginDto } from "../dtos";
import { AuthService } from "../services/auth.service";

@Controller("/auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("/login")
  @Validation()
  async login(@Body() user_login: UserLoginDto) {
    return this.authService.login(user_login);
  }
}
