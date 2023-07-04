import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import asd from '@test/test';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();

console.log(asd);
