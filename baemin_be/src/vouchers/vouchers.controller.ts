import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { VouchersService } from './vouchers.service';
import { Prisma } from '@prisma/client';

@Controller('vouchers')
export class VouchersController {
  constructor(private readonly vouchersService: VouchersService) {}

  // Create a new voucher
  @Post()
  async create(@Body() data: Prisma.vouchersCreateInput) {
    return this.vouchersService.create(data);
  }

  // Find all vouchers
  @Get()
  async findAll() {
    return this.vouchersService.findAll();
  }

  // Find a voucher by ID
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.vouchersService.findOne(id);
  }

  // Find a voucher by code
  @Get('code/:code')
  async findOneByCode(@Param('code') code: string) {
    return this.vouchersService.findOneByCode(code);
  }

  // Update a voucher by ID
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() data: Prisma.vouchersUpdateInput,
  ) {
    return this.vouchersService.update(id, data);
  }

  // Delete a voucher by ID
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.vouchersService.remove(id);
  }
}
