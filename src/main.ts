import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      //Esto valida que no le mande data basura por el body ej en el post y lo limpia
      whitelist: true,
      //Esto no permite mandar propiedades demas y da un bad request un 400
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
