import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

const logger = new Logger('Main=>bootstrap()');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  logger.log('starting api');
  const host = configService.get('DB_HOST', 5002);
  const user = configService.get('DB_USER', 5002);
  logger.log(`Database values: ${host} ${user}`);
  await app.listen(5001);
}
bootstrap();
