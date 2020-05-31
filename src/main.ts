import * as rateLimit from 'express-rate-limit';
import * as helmet from 'helmet';

import { NestFactory } from '@nestjs/core';

import { AppModule } from './app';
import config from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/v1');

  // Secutiry Modules
  app.use(
    rateLimit({
      windowMs: 1000, // 1s
      max: 10, // limit each IP to 10 requests per windowMs
    }),
  );

  app.use(helmet());
  app.enableCors();
  await app.listen(config.app.port);
}
bootstrap();
