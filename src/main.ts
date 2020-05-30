import { NestFactory } from '@nestjs/core';
import { AppModule } from './app';
import config from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(config.app.port);
}
bootstrap();
