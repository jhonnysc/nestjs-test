import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/database';
import { UserModule } from './modules/users';

@Module({
  imports: [DatabaseModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
