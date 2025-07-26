import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'NATS_SERVICE',  // Đặt tên cho service, sẽ dùng trong các microservice khác
        transport: Transport.NATS,  // Định nghĩa transport là NATS
        options: {
          servers: ['nats://localhost:4222'],  // Địa chỉ của NATS server
        },
      },
    ]),
  ],
  exports: [
    ClientsModule.register([
      {
        name: 'NATS_SERVICE',
        transport: Transport.NATS,
        options: {
          servers: ['nats://localhost:4222'],  // Địa chỉ của NATS server
        },
      },
    ]),
  ],
})
export class NatsClientModule {}
