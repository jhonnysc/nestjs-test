import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { CreateUserDto, UserGetDto, UserResponseDto } from '../dtos';
import { User } from '../interfaces/user.interface';
import { to } from 'await-to-js';
import { Pagination } from '@app/utils/pagination/pagination';
import { EmailAlreadyInUse } from '@app/utils/exceptions';
import { Roles } from '@app/common/roles';
import { plainToClass } from 'class-transformer';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(user_dto: CreateUserDto): Promise<UserResponseDto> {
    let err: Error;
    let user: User;

    [err, user] = await to(
      this.userRepository.findOne({ email: user_dto.email }),
    );

    if (err) throw new InternalServerErrorException();
    if (user) throw new EmailAlreadyInUse();

    [err, user] = await to(
      this.userRepository.create({ ...user_dto, role: Roles.USER }),
    );

    if (err) throw new InternalServerErrorException();

    return plainToClass(UserResponseDto, user);
  }

  async findByCredentials(email: string, password: string) {
    return this.userRepository.findOne({ email, password });
  }

  async get(query: UserGetDto) {
    const where = {};
    if (query.email) Object.assign(where, { email: query.email });
    if (query.name) Object.assign(where, { name: query.name });

    return this.userRepository.paginate<UserResponseDto>(
      query,
      where,
      UserResponseDto,
    );
  }
}
