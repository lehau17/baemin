import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FoodsDetailService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.foods_detailsCreateInput) {
    return this.prisma.foods_details.create({ data });
  }

  async findAll(limit = 20, skip?: number, cursor?: number) {
    const options: Prisma.foods_detailsFindManyArgs = {
      take: limit,
    };

    if (cursor) {
      options.skip = 1;
      options.cursor = { id: cursor };
    } else if (skip) {
      options.skip = skip;
    }

    return this.prisma.foods_details.findMany(options);
  }

  async findOne(id: number) {
    return this.prisma.foods_details.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: Prisma.foods_detailsUpdateInput) {
    return this.prisma.foods_details.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.foods_details.delete({
      where: { id },
    });
  }
}
