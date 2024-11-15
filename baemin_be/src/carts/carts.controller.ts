import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Query,
  Put,
  Delete,
  Request,
  UseGuards,
  Req,
} from '@nestjs/common';
import { CartsService } from './carts.service';
import { Prisma, users } from '@prisma/client';
import { AccessTokenStrategy } from 'src/auth/accessToken.strategy';
import { AccessTokenGuard } from 'src/common/guard/accessToken.guard';

@Controller('carts')
export class CartsController {
  constructor(private readonly cartsService: CartsService) {}

  // Create a new cart for the authenticated user
  @Post()
  @UseGuards(AccessTokenGuard)
  async create(@Request() req) {
    console.log(req.user);
    return this.cartsService.create(req.user.sub); // Pass user id from req.user
  }

  // Find all carts for the authenticated user (pagination supported)
  @Get()
  async findAll(
    @Request() req,
    @Query('limit') limit: string,
    @Query('skip') skip: string,
    @Query('cursor') cursor: string,
  ) {
    const limitInt = parseInt(limit, 10) || 20;
    const skipInt = parseInt(skip, 10) || 0;
    const cursorInt = cursor ? parseInt(cursor, 10) : undefined;

    return this.cartsService.findByUserId(
      req.user.id,
      limitInt,
      skipInt,
      cursorInt,
    );
  }

  @Get('/me')
  @UseGuards(AccessTokenGuard)
  async getMyCart(@Req() req) {
    return this.cartsService.findByUserId(req.user.sub);
  }
  @Get(':id')
  async findOne(@Request() req, @Param('id') id: number) {
    const cart = await this.cartsService.findOne(id);
    if (cart.user_id !== req.user.id) {
      throw new Error("Unauthorized access to another user's cart");
    }
    return cart;
  }

  // Update a cart (only for the authenticated user)
  @Put(':id')
  async update(
    @Request() req,
    @Param('id') id: number,
    @Body() data: Prisma.cartsUpdateInput,
  ) {
    const cart = await this.cartsService.findOne(id);
    if (cart.user_id !== req.user.id) {
      throw new Error("Unauthorized access to another user's cart");
    }
    return this.cartsService.update(id, data);
  }

  // Delete a cart (only for the authenticated user)
  @Delete(':id')
  async remove(@Request() req, @Param('id') id: number) {
    const cart = await this.cartsService.findOne(id);
    if (cart.user_id !== req.user.id) {
      throw new Error("Unauthorized access to another user's cart");
    }
    return this.cartsService.remove(id);
  }
}
