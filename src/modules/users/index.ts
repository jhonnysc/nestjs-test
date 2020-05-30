import { Module } from '@nestjs/common';

import { UsersController } from './controllers';
import { userProviders } from './providers';
import { UserRepository } from './repositories';
import { UserService } from './services';

@Module({
  providers: [UserService, UserRepository, ...userProviders],
  controllers: [UsersController],
  exports: [UserService, UserRepository, ...userProviders],
})
export class UserModule {}
