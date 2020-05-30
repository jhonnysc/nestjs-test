import { MockType } from "./mock.types";
import { UserRepository } from "@app/modules/users/repositories";

const userRepositoryMockFactory: () => MockType<UserRepository> = jest.fn(
  () => ({
    create: jest.fn((entity) => entity),
    paginate: jest.fn((entity) => entity),
    findOne: jest.fn((entity) => entity),
  }),
);

export default userRepositoryMockFactory;
