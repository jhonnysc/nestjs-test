import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { UserRepository } from "../repositories/user.repository";
import { CreateUserDto, UserGetDto } from "../dtos";
import { User } from "../interfaces/user.interface";
import { to } from "await-to-js";
import { Pagination } from "@app/utils/pagination/pagination";

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(user_dto: CreateUserDto): Promise<User> {
    const [err, user] = await to(this.userRepository.create(user_dto));

    if (err) throw new InternalServerErrorException();

    return user;
  }

  async get(query: UserGetDto): Promise<Pagination<User>> {
    const where = {};
    if (query.email) Object.assign(where, { email: query.email });
    if (query.name) Object.assign(where, { name: query.name });

    return this.userRepository.paginate(
      {
        limit: query.limit,
        page: query.page,
        route: query.route,
      },
      where,
    );
  }
}
