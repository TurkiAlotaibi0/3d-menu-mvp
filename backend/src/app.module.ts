import { Module } from '@nestjs/common';
import { DishesController } from './dishes.controller';
import { ApiController } from './main';

@Module({
  controllers: [ApiController, DishesController],
})
export class AppModule {} 