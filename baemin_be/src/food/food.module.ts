import { Module } from '@nestjs/common';
import { FoodService } from './food.service';
import { FoodController } from './food.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { RestaurantService } from 'src/restaurant/restaurant.service';

@Module({
  controllers: [FoodController],
  providers: [FoodService, PrismaService, RestaurantService],
})
export class FoodModule {}
