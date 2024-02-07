import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = process.env.PORT || 4001;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  // TODO: enable cors
  app.enableCors({
    origin: '*',
  });

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(port, () =>
    console.log(`Server is running on port ${port}`),
  );
}
bootstrap();
