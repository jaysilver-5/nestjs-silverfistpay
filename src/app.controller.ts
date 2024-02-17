import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/checkout')
  async checkout(@Body() checkoutData: any): Promise<{ Payment_Url: string }> {
    return this.appService.checkout(checkoutData);
  }
}
