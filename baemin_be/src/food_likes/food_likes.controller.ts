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
import { FoodLikesService } from './food_likes.service';
import { CreateFoodLikeDto } from './dto/create-food_like.dto';
import { UpdateFoodLikeDto } from './dto/update-food_like.dto';
import { AccessTokenGuard } from 'src/common/guard/accessToken.guard';
import { JwtPayload } from 'src/auth/accessToken.strategy';
import { JwtModuleAsyncOptions } from '@nestjs/jwt';

@Controller('food-likes')
export class FoodLikesController {
  constructor(private readonly foodLikesService: FoodLikesService) { }

  @Post()
  @UseGuards(AccessTokenGuard)
  create(@Body() createFoodLikeDto: CreateFoodLikeDto, @Req() req: Express.Request) {
    const { sub } = req.user as JwtPayload
    return this.foodLikesService.create(createFoodLikeDto, sub);
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
  @UseGuards(AccessTokenGuard)
  remove(@Param('id') id: number, @Req() req: Express.Request) {
    const { sub } = req.user as JwtPayload
    return this.foodLikesService.remove(id, sub);
  }

  // Additional API endpoints
  @Post('/food/:id/toggle')
  @UseGuards(AccessTokenGuard)
  toggleLike(
    @Param('id') id: string,
    @Req() req: Express.Request,
  ) {
    const { sub } = req.user as JwtPayload
    return this.foodLikesService.toggleLike(sub, +id);
  }

  @Get('user/:user_id/liked-foods')
  @UseGuards(AccessTokenGuard)
  getUserLikedFoods(@Param('user_id') user_id: number) {
    return this.foodLikesService.getUserLikedFoods(user_id);
  }




  @Get('/food/:id')
  @UseGuards(AccessTokenGuard)
  listUserLiked(@Param('id') id: string) {
    return this.foodLikesService.listUserLiked(+id);
  }
}
