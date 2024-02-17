import { Controller, Post, Body, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class WebhookController {
  constructor(private readonly appService: AppService) {}

  @Post('/webhook')
  async handleWebhook(@Body() req: any, @Res() res: any): Promise<void> {
    try {
      // ... (rest of the code remains unchanged)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
