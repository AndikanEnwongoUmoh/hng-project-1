import { Controller, Get, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello?visitor_name=Mark')
  async getIP(@Req () req: Request, @Query('visitor_name') visitor_name: string) {
    return await this.appService.getIP(req);
  }
  
}