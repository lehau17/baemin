import { Module } from '@nestjs/common';
import { FoodLikesService } from './food_likes.service';
import { FoodLikesController } from './food_likes.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [FoodLikesController],
  providers: [FoodLikesService, PrismaService],
})
export class FoodLikesModule {}
