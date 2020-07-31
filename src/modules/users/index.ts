import { Module } from '@nestjs/common';

import { UsersController, UsersControllerPerm } from './controllers';
import { userProviders } from './providers';
import { UserRepository } from './repositories';
import { UserService } from './services';

@Module({
  providers: [UserService, UserRepository, ...userProviders],
  controllers: [UsersController, UsersControllerPerm],
  exports: [UserService, UserRepository, ...userProviders],
})
export class UserModule {}
