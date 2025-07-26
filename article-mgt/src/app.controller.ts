import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { deleteArticleDto, saveArticleDto } from './dto/dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @MessagePattern({ cmd: 'SAVE_ARTICLE' })
  async saveArticle(@Payload() data: saveArticleDto) {
    return this.appService.saveArticle(data);
  }

  @MessagePattern({ cmd: 'GET_ALL_ARTICLES' })
  getAllArticles() {
    return this.appService.getAllArticles();
  }

  @MessagePattern({ cmd: 'DELETE_ARTICLE' })
  deleteArticle(@Payload() data: deleteArticleDto) {
    return this.appService.deleteArticle(data);
  }

  
}
