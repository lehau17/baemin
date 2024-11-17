import { Module } from '@nestjs/common';
import { FoodRatingsService } from './food_ratings.service';
import { FoodRatingsController } from './food_ratings.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { FoodService } from 'src/food/food.service';
import { RestaurantService } from 'src/restaurant/restaurant.service';

@Module({
  controllers: [FoodRatingsController],
  providers: [FoodRatingsService, PrismaService, FoodService, RestaurantService],
})
export class FoodRatingsModule { }
