import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ItemsController } from './controllers/v1/items.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, ItemsController],
  providers: [AppService],
})
export class AppModule {}
