import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { FoodRatingsService } from './food_ratings.service';
import { CreateFoodRatingDto } from './dto/create-food_rating.dto';
import { UpdateFoodRatingDto } from './dto/update-food_rating.dto';

@Controller('food-ratings')
export class FoodRatingsController {
  constructor(private readonly foodRatingsService: FoodRatingsService) {}

  @Post()
  create(@Body() createFoodRatingDto: CreateFoodRatingDto) {
    return this.foodRatingsService.create(createFoodRatingDto);
  }

  @Get()
  findAll(
    @Query('limit') limit: number,
    @Query('skip') skip?: number,
    @Query('cursor') cursor?: number,
  ) {
    return this.foodRatingsService.findAll(limit, skip, cursor);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.foodRatingsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateFoodRatingDto: UpdateFoodRatingDto,
  ) {
    return this.foodRatingsService.update(id, updateFoodRatingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.foodRatingsService.remove(id);
  }

  // Additional API endpoints
  @Post('rate')
  rateFood(
    @Body()
    {
      user_id,
      food_id,
      food_rate_point,
      food_rate_comment,
    }: CreateFoodRatingDto,
  ) {
    return this.foodRatingsService.rateFood(
      user_id,
      food_id,
      food_rate_point,
      food_rate_comment,
    );
  }

  @Get('food/:food_id/average')
  getAverageRating(@Param('food_id') food_id: number) {
    return this.foodRatingsService.getAverageRating(food_id);
  }

  @Get('user/:user_id/ratings')
  getUserRatings(@Param('user_id') user_id: number) {
    return this.foodRatingsService.getUserRatings(user_id);
  }

  @Get('food/:food_id/ratings')
  getFoodRatings(@Param('food_id') food_id: number) {
    return this.foodRatingsService.getFoodRatings(food_id);
  }
}
