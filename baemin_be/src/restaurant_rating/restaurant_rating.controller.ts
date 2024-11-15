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
import { RestaurantRatingService } from './restaurant_rating.service';
import { CreateRestaurantRatingDto } from './dto/create-restaurant_rating.dto';
import { UpdateRestaurantRatingDto } from './dto/update-restaurant_rating.dto';

@Controller('restaurant-ratings')
export class RestaurantRatingController {
  constructor(
    private readonly restaurantRatingService: RestaurantRatingService,
  ) {}

  @Post()
  create(@Body() createRestaurantRatingDto: CreateRestaurantRatingDto) {
    return this.restaurantRatingService.create(createRestaurantRatingDto);
  }

  @Get()
  findAll(
    @Query('limit') limit: number,
    @Query('skip') skip?: number,
    @Query('cursor') cursor?: number,
  ) {
    return this.restaurantRatingService.findAll(limit, skip, cursor);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.restaurantRatingService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateRestaurantRatingDto: UpdateRestaurantRatingDto,
  ) {
    return this.restaurantRatingService.update(id, updateRestaurantRatingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.restaurantRatingService.remove(id);
  }

  // Additional API endpoints
  @Get('restaurant/:res_id/average-rating')
  getRestaurantAverageRating(@Param('res_id') res_id: number) {
    return this.restaurantRatingService.getRestaurantAverageRating(res_id);
  }

  @Get('user/:user_id/ratings')
  getUserRatings(@Param('user_id') user_id: number) {
    return this.restaurantRatingService.getUserRatings(user_id);
  }
}
