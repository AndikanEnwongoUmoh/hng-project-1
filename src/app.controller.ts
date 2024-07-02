import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller('ip')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getIP(@Req () req: Request){
    return await this.appService.getIP(req);
  }
  
}