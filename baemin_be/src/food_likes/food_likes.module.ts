import { Module } from '@nestjs/common';
import { FoodLikesService } from './food_likes.service';
import { FoodLikesController } from './food_likes.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { FoodService } from 'src/food/food.service';
import { RestaurantService } from 'src/restaurant/restaurant.service';

@Module({
  controllers: [FoodLikesController],
  providers: [FoodLikesService, PrismaService, FoodService, RestaurantService],
})
export class FoodLikesModule { }
