import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FoodLikesService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.food_likesCreateInput) {
    return this.prisma.food_likes.create({ data });
  }

  async findAll(limit = 20, skip?: number, cursor?: number) {
    const options: Prisma.food_likesFindManyArgs = {
      take: limit,
    };

    if (cursor) {
      options.skip = 1;
      options.cursor = { id: cursor };
    } else if (skip) {
      options.skip = skip;
    }

    return this.prisma.food_likes.findMany(options);
  }

  async findOne(id: number) {
    return this.prisma.food_likes.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: Prisma.food_likesUpdateInput) {
    return this.prisma.food_likes.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.food_likes.delete({
      where: { id },
    });
  }

  // Additional functionalities

  async toggleLike(user_id: number, food_id: number) {
    const existingLike = await this.prisma.food_likes.findFirst({
      where: { user_id, food_id },
    });

    if (existingLike) {
      // Toggle off if already liked
      await this.prisma.food_likes.delete({ where: { id: existingLike.id } });
      return { message: 'Unliked' };
    } else {
      // Create a new like
      await this.prisma.food_likes.create({
        data: { user_id, food_id, status: 1 },
      });
      return { message: 'Liked' };
    }
  }

  async getUserLikedFoods(user_id: number) {
    return this.prisma.food_likes.findMany({
      where: { user_id, status: 1 },
      include: { foods: true },
    });
  }
}
