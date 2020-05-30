import { Inject } from '@nestjs/common';
import { Model, MongooseFilterQuery } from 'mongoose';
import { User } from '../interfaces/user.interface';
import { CreateUserDto, UserResponseDto } from '../dtos';
import { paginate } from '@app/utils/pagination';
import { IPaginationOptions } from '@app/utils/pagination/interfaces';
import { ClassType } from 'class-transformer/ClassTransformer';

export class UserRepository {
  constructor(
    @Inject('USER_MODEL')
    private readonly userModel: Model<User>,
  ) {}

  async create(user: CreateUserDto) {
    return this.userModel.create(user);
  }

  async findOne(query: MongooseFilterQuery<User>) {
    return this.userModel.findOne(query);
  }

  async paginate<T>(
    options: IPaginationOptions,
    query: MongooseFilterQuery<User>,
    dto: ClassType<T>,
  ) {
    return paginate<User, T>(this.userModel, options, query, dto);
  }
}
