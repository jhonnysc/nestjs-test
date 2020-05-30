import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { DatabaseModule } from './modules/database';
import { UserModule } from './modules/users';
import { Heimdall } from './middlewares';
import { AuthModule } from './modules/auth';

@Module({
  imports: [DatabaseModule, UserModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(Heimdall)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
