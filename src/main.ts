import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ClientOptions, Transport, MicroserviceOptions } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
   transport: Transport.GRPC,
   options: {
      url: 'localhost:50051',
     package: 'hero',
     protoPath: join(__dirname, './hero/hero.proto'),
   }
  });
  app.listen();
}
bootstrap();
