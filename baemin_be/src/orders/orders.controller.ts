import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
  Req,
  UseGuards,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Prisma } from '@prisma/client';
import { CreateOrderDto } from './dto/create-order.dto';
import { AccessTokenGuard } from 'src/common/guard/accessToken.guard';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  // Create a new order
  @Post()
  @UseGuards(AccessTokenGuard)
  async create(@Body() data: CreateOrderDto, @Req() req) {
    return this.ordersService.create(data, req.user.sub);
  }

  // Find all orders for a user
  @Get('user/:userId')
  async findAll(@Param('userId') userId: number) {
    return this.ordersService.findAllByUserId(userId);
  }

  // Find a single order by ID
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.ordersService.findOne(id);
  }

  // Update an order by ID
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() data: Prisma.ordersUpdateInput,
  ) {
    return this.ordersService.update(id, data);
  }

  // Delete an order by ID
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.ordersService.remove(id);
  }
}
