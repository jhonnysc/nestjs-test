import { Module } from '@nestjs/common';
import { UserService } from './services';
import { UserRepository } from './repositories';
import { userProviders } from './providers';
import { UsersController } from './controllers';

@Module({
  providers: [UserService, UserRepository, ...userProviders],
  controllers: [UsersController],
  exports: [UserService, UserRepository, ...userProviders],
})
export class UserModule {}
