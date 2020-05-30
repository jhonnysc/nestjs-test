import { Inject } from '@nestjs/common';
import { Model, MongooseFilterQuery } from 'mongoose';
import { User } from '../interfaces/user.interface';
import { CreateUserDto } from '../dtos';
import { paginate } from '@app/utils/pagination';
import { IPaginationOptions } from '@app/utils/pagination/interfaces';

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

  async paginate(
    options: IPaginationOptions,
    query: MongooseFilterQuery<User>,
  ) {
    return paginate<User>(this.userModel, options, query);
  }
}
