import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { UserRepository } from "../repositories/user.repository";
import { CreateUserDto, UserGetDto } from "../dtos";
import { User } from "../interfaces/user.interface";
import { to } from "await-to-js";
import { Pagination } from "@app/utils/pagination/pagination";
import { EmailAlreadyInUse } from "@app/utils/exceptions";

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(user_dto: CreateUserDto): Promise<User> {
    let err: Error;
    let user: User;

    [err, user] = await to(
      this.userRepository.findOne({ email: user_dto.email }),
    );

    if (err) throw new InternalServerErrorException();
    if (user) throw new EmailAlreadyInUse();

    [err, user] = await to(this.userRepository.create(user_dto));

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
