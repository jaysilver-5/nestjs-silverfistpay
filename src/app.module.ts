import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { WebhookController } from './webhook.controller';
import { AppService } from './app.service';

@Module({
  controllers: [AppController, WebhookController],
  providers: [AppService],
})
export class AppModule {}
