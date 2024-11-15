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
import { FoodsDetailService } from './foods_detail.service';
import { CreateFoodsDetailDto } from './dto/create-foods_detail.dto';
import { UpdateFoodsDetailDto } from './dto/update-foods_detail.dto';

@Controller('foods-details')
export class FoodsDetailController {
  constructor(private readonly foodsDetailService: FoodsDetailService) {}

  @Post()
  create(@Body() createFoodsDetailDto: CreateFoodsDetailDto) {
    return this.foodsDetailService.create(createFoodsDetailDto);
  }

  @Get()
  findAll(
    @Query('limit') limit: number,
    @Query('skip') skip?: number,
    @Query('cursor') cursor?: number,
  ) {
    return this.foodsDetailService.findAll(limit, skip, cursor);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.foodsDetailService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateFoodsDetailDto: UpdateFoodsDetailDto,
  ) {
    return this.foodsDetailService.update(id, updateFoodsDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.foodsDetailService.remove(id);
  }
}
