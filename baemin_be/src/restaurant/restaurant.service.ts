import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RestaurantService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.restaurantsCreateInput, userId: number) {
    console.log(userId);
    return this.prisma.restaurants.create({
      data: {
        ...data,
        users: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }

  async findAll(limit = 20, skip?: number, cursor?: number) {
    const options: Prisma.restaurantsFindManyArgs = {
      take: limit,
    };

    if (cursor) {
      options.skip = 1;
      options.cursor = { id: cursor };
    } else if (skip) {
      options.skip = skip;
    }

    return this.prisma.restaurants.findMany(options);
  }

  async findOne(id: number) {
    return this.prisma.restaurants.findUnique({
      where: { id },
    });
  }

  async getRestaurantByUser(userId: number) {
    return this.prisma.restaurants.findFirst({
      where: {
        user_id: userId,
      },
    });
  }

  async update(id: number, data: Prisma.restaurantsUpdateInput) {
    return this.prisma.restaurants.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.restaurants.delete({
      where: { id },
    });
  }
}
