import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpStatus } from '@nestjs/common';
import * as request from 'supertest';

describe('AppController', () => {
  let app;
  
  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/POST save-reader', () => {
    return request(app.getHttpServer())
      .post('/api/save-reader')
      .send({ name: 'John Doe' })
      .expect(HttpStatus.OK)
      .expect({ message: 'Reader saved successfully!' }); // Kiểm tra lại message này nếu cần
  });

  it('/GET get-all-readers', () => {
    return request(app.getHttpServer())
      .get('/api/get-all-readers')
      .expect(HttpStatus.OK)
      .expect([{
        name: 'John Doe'
      }]);
  });
});
