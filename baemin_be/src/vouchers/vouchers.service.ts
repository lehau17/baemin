import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class VouchersService {
  constructor(private prisma: PrismaService) {}

  // Create a new voucher
  async create(data: Prisma.vouchersCreateInput) {
    return this.prisma.vouchers.create({ data });
  }

  // Find all vouchers
  async findAll() {
    return this.prisma.vouchers.findMany();
  }

  // Find a single voucher by code
  async findOneByCode(code: string) {
    return this.prisma.vouchers.findUnique({
      where: { code },
    });
  }

  // Find a single voucher by ID
  async findOne(id: number) {
    return this.prisma.vouchers.findUnique({
      where: { id },
    });
  }

  // Update a voucher
  async update(id: number, data: Prisma.vouchersUpdateInput) {
    return this.prisma.vouchers.update({
      where: { id },
      data,
    });
  }

  // Delete a voucher by ID
  async remove(id: number) {
    return this.prisma.vouchers.delete({
      where: { id },
    });
  }
}
