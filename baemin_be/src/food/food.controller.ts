import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
  Req,
} from '@nestjs/common';
import { FoodService } from './food.service';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { AccessTokenGuard } from 'src/common/guard/accessToken.guard';
import { AccessTokenStrategy } from 'src/common/stategy/accessToken.strategy';

@Controller('foods')
export class FoodController {
  constructor(private readonly foodService: FoodService) {}

  @Post()
  @UseGuards(AccessTokenGuard)
  create(@Body() createFoodDto: CreateFoodDto, @Req() req) {
    return this.foodService.create(createFoodDto, req.user.id);
  }

  @Get()
  findAll(
    @Query('limit') limit = 20,
    @Query('skip') skip = 0,
    @Query('cursor') cursor?: number,
  ) {
    return this.foodService.findAll({ limit, skip, cursor });
  }

  @Get('/search')
  searchFood(
    @Query('limit') limit = 20,
    @Query('skip') skip = 0,
    @Query('cursor') cursor?: number,
    @Query('name') name?: string,
  ) {
    return this.foodService.findFood({ limit, skip, cursor, name });
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.foodService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AccessTokenGuard)
  update(@Param('id') id: number, @Body() updateFoodDto: UpdateFoodDto) {
    return this.foodService.update(id, updateFoodDto);
  }

  @Delete(':id')
  @UseGuards(AccessTokenGuard)
  remove(@Param('id') id: number) {
    return this.foodService.remove(id);
  }
}
