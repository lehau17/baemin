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
import { RestaurantRatingService } from './restaurant_rating.service';
import { CreateRestaurantRatingDto } from './dto/create-restaurant_rating.dto';
import { UpdateRestaurantRatingDto } from './dto/update-restaurant_rating.dto';
import { AccessTokenGuard } from 'src/common/guard/accessToken.guard';
import { JwtPayload } from 'src/common/stategy/accessToken.strategy';
import { Message } from 'src/common/deco/message';

@Controller('restaurant-ratings')
export class RestaurantRatingController {
  constructor(
    private readonly restaurantRatingService: RestaurantRatingService,
  ) { }

  @Post()
  @Message("created restaurant rating")
  @UseGuards(AccessTokenGuard)
  create(@Body() createRestaurantRatingDto: CreateRestaurantRatingDto, @Req() req: Express.Request) {
    const { sub } = req.user as JwtPayload
    return this.restaurantRatingService.create(createRestaurantRatingDto, sub);
  }

  @Get()
  findAll(
    @Query('limit') limit = 20,
    @Query('skip') skip = 0,
    @Query('cursor') cursor?: number,
  ) {
    return this.restaurantRatingService.findAll({ limit, skip, cursor });
  }


  @Get("/res/:id")
  findAllByRes(
    @Param('id') id: string,
    @Query('limit') limit = 20,
    @Query('skip') skip = 0,
    @Query('cursor') cursor?: number
  ) {
    // Chuyển id sang kiểu number và gọi service
    return this.restaurantRatingService.findAllByRes({
      limit,
      skip,
      cursor,
      id: +id  // Chuyển id thành number ở đây
    });
  }


  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.restaurantRatingService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AccessTokenGuard)
  update(
    @Param('id') id: number, @Req() req: Express.Request,
    @Body() updateRestaurantRatingDto: UpdateRestaurantRatingDto,
  ) {
    const { sub } = req.user as JwtPayload
    return this.restaurantRatingService.update(id, updateRestaurantRatingDto, sub);
  }

  @Delete(':id')
  @UseGuards(AccessTokenGuard)
  remove(@Param('id') id: number, @Req() req: Express.Request) {
    const { sub } = req.user as JwtPayload
    return this.restaurantRatingService.remove(id, sub);
  }

  @Get('restaurant/:res_id/average-rating')
  getRestaurantAverageRating(@Param('res_id') res_id: number) {
    return this.restaurantRatingService.getRestaurantAverageRating(res_id);
  }

  @Get('user/:user_id/ratings')
  getUserRatings(@Param('user_id') user_id: number) {
    return this.restaurantRatingService.getUserRatings(user_id);
  }
}
