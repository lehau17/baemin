import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Query,
  Put,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CartItemsService } from './cart_items.service';
import { AccessTokenGuard } from 'src/common/guard/accessToken.guard';
import { CreateCartItemDto } from './dto/create-cart_item.dto';
import { UpdateCartItemDto } from './dto/update-cart_item.dto';

@Controller('cart-items')
export class CartItemsController {
  constructor(private readonly cartItemsService: CartItemsService) {}

  // Create a new cart item
  @Post()
  @UseGuards(AccessTokenGuard)
  async create(@Body() data: CreateCartItemDto, @Req() req) {
    return this.cartItemsService.create(data, req.user.sub);
  }

  // Find all cart items with pagination
  @Get()
  async findAll(
    @Query('limit') limit: string,
    @Query('skip') skip: string,
    @Query('cursor') cursor: string,
  ) {
    const limitInt = parseInt(limit, 10) || 20;
    const skipInt = parseInt(skip, 10) || 0;
    const cursorInt = cursor ? parseInt(cursor, 10) : undefined;

    return this.cartItemsService.findAll(limitInt, skipInt, cursorInt);
  }

  // Find a single cart item by ID
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.cartItemsService.findOne(id);
  }

  // Update a cart item by ID
  @Put(':id')
  @UseGuards(AccessTokenGuard)
  async update(@Param('id') id: number, @Body() data: UpdateCartItemDto) {
    return this.cartItemsService.update(id, data);
  }

  // Delete a cart item by ID
  @Delete(':id')
  @UseGuards(AccessTokenGuard)
  async remove(@Param('id') id: number) {
    return this.cartItemsService.remove(id);
  }
}
