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
import { RestaurantService } from './restaurant.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { AccessTokenGuard } from 'src/common/guard/accessToken.guard';
import { AccessTokenStrategy } from 'src/auth/accessToken.strategy';

@Controller('restaurants')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}
  @Post()
  @UseGuards(AccessTokenGuard)
  create(@Body() createRestaurantDto: CreateRestaurantDto, @Req() req) {
    return this.restaurantService.create(createRestaurantDto, req.user.sub);
  }

  @Get()
  findAll(
    @Query('limit') limit: number,
    @Query('skip') skip?: number,
    @Query('cursor') cursor?: number,
  ) {
    return this.restaurantService.findAll(limit, skip, cursor);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.restaurantService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateRestaurantDto: UpdateRestaurantDto,
  ) {
    return this.restaurantService.update(id, updateRestaurantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.restaurantService.remove(id);
  }
}
