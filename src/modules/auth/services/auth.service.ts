import { Injectable } from '@nestjs/common';
import { UserLoginResponseDto, UserLoginDto } from '../dtos';
import { JwtService } from '@nestjs/jwt';
import { InvalidCredentials } from '@app/utils/exceptions';
import { UserService } from '@app/modules/users/services';
import { Token } from '../interfaces/index.';
import config from '@app/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(user_login: UserLoginDto): Promise<UserLoginResponseDto> {
    const user = await this.userService.findByCredentials(
      user_login.email,
      user_login.password,
    );

    if (!user) throw new InvalidCredentials();

    const payload: Token = {
      user_id: user.id,
      email: user.email,
      role: user.role,
    };

    const token = this.jwtService.sign(payload);

    return {
      access_token: token,
      expiries_in: config.jwt.expiries,
    };
  }
}
