import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { OrderDetailsService } from './order_details.service';
import { Prisma } from '@prisma/client';

@Controller('order-details')
export class OrderDetailsController {
  constructor(private readonly orderDetailsService: OrderDetailsService) {}

  // Create a new order detail
  @Post()
  async create(@Body() data: Prisma.order_detailsCreateInput) {
    return this.orderDetailsService.create(data);
  }

  // Find all order details by order ID
  @Get('order/:orderId')
  async findAll(@Param('orderId') orderId: number) {
    return this.orderDetailsService.findAllByOrderId(orderId);
  }

  // Find a single order detail by ID
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.orderDetailsService.findOne(id);
  }

  // Update an order detail by ID
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() data: Prisma.order_detailsUpdateInput,
  ) {
    return this.orderDetailsService.update(id, data);
  }

  // Delete an order detail by ID
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.orderDetailsService.remove(id);
  }
}
