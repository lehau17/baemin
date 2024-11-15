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
import { FoodLikesService } from './food_likes.service';
import { CreateFoodLikeDto } from './dto/create-food_like.dto';
import { UpdateFoodLikeDto } from './dto/update-food_like.dto';

@Controller('food-likes')
export class FoodLikesController {
  constructor(private readonly foodLikesService: FoodLikesService) {}

  @Post()
  create(@Body() createFoodLikeDto: CreateFoodLikeDto) {
    return this.foodLikesService.create(createFoodLikeDto);
  }

  @Get()
  findAll(
    @Query('limit') limit: number,
    @Query('skip') skip?: number,
    @Query('cursor') cursor?: number,
  ) {
    return this.foodLikesService.findAll(limit, skip, cursor);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.foodLikesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateFoodLikeDto: UpdateFoodLikeDto,
  ) {
    return this.foodLikesService.update(id, updateFoodLikeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.foodLikesService.remove(id);
  }

  // Additional API endpoints
  @Post('toggle')
  toggleLike(
    @Body() { user_id, food_id }: { user_id: number; food_id: number },
  ) {
    return this.foodLikesService.toggleLike(user_id, food_id);
  }

  @Get('user/:user_id/liked-foods')
  getUserLikedFoods(@Param('user_id') user_id: number) {
    return this.foodLikesService.getUserLikedFoods(user_id);
  }
}
