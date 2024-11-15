import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './common/handler_error';
import { TransformInterceptor } from './common/handler_response';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new TransformInterceptor(new Reflector()));
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Automatically strip properties that are not in the DTO
      forbidNonWhitelisted: true, // Throw an error for properties not in the DTO
      transform: true, // Automatically transform payloads into DTO instances
    }),
  );
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
