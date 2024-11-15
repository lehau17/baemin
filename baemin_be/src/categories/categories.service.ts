import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.categoriesCreateInput) {
    return this.prisma.categories.create({ data });
  }

  async findAll({
    limit = 20,
    skip = 0,
    cursor,
  }: {
    limit?: number;
    skip?: number;
    cursor?: number;
  }) {
    const options: Prisma.categoriesFindManyArgs = {
      take: limit,
      include: {
        foods: {
          take: 10,
          include: {
            restaurants: true,
          },
        },
      },
    };

    if (cursor) {
      options.skip = 1;
      options.cursor = { id: cursor };
    } else if (skip) {
      options.skip = skip;
    }

    return this.prisma.categories.findMany(options);
  }

  async findOne(id: number) {
    return this.prisma.categories.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: Prisma.categoriesUpdateInput) {
    return this.prisma.categories.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.categories.delete({
      where: { id },
    });
  }
}
