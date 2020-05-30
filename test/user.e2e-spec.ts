import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import * as request from "supertest";
import { UserModule } from "@app/modules/users";
import { MockType } from "@root/mocks/mock.types";
import { UserRepository } from "@app/modules/users/repositories";
import { internet, name } from "faker";

jest.mock("@app/modules/users/repositories");

describe("AppController (e2e)", () => {
  let app: INestApplication;
  let userRepository: MockType<UserRepository>;
  const user = {
    name: name.firstName(),
    email: internet.email(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [UserModule],
    }).compile();

    app = module.createNestApplication();
    userRepository = module.get(UserRepository);

    await app.init();
  });

  it("/Should create user", () => {
    userRepository.findOne.mockReturnValueOnce(
      new Promise((resolve) => resolve(null)),
    );

    userRepository.create.mockReturnValueOnce(
      new Promise((resolve) => resolve(user)),
    );

    return request(app.getHttpServer())
      .post("/users")
      .send(user)
      .expect(201)
      .expect(({ body }) => {
        expect(body.name).toEqual(user.name);
        expect(body.email).toEqual(user.email);
      });
  });

  it("/Should deny create user with dupe email", () => {
    userRepository.findOne.mockReturnValueOnce(
      new Promise((resolve) => resolve(user)),
    );
    return request(app.getHttpServer())
      .post("/users")
      .send(user)
      .expect(422)
      .expect(({ body }) => expect(body.code).toEqual(2000));
  });
});
