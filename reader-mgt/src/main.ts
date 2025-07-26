import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.NATS,  // Chúng ta sử dụng NATS làm phương thức truyền tải
      options: {
        servers: ['nats://localhost:4222'],  // Địa chỉ của NATS server
      },
    },
  );
  await app.listen();  // Lắng nghe và khởi động microservice
}
bootstrap();