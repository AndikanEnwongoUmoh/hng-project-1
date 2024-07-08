import { Controller, Get, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller('hello')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('?visitor')
  async getIP(@Req () req: Request) {
    return await this.appService.getIP(req);
  }
  
}