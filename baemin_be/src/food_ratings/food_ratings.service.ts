import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FoodRatingsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.food_ratingsCreateInput) {
    return this.prisma.food_ratings.create({ data });
  }

  async findAll(limit = 20, skip?: number, cursor?: number) {
    const options: Prisma.food_ratingsFindManyArgs = {
      take: limit,
    };

    if (cursor) {
      options.skip = 1;
      options.cursor = { id: cursor };
    } else if (skip) {
      options.skip = skip;
    }

    return this.prisma.food_ratings.findMany(options);
  }

  async findOne(id: number) {
    return this.prisma.food_ratings.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: Prisma.food_ratingsUpdateInput) {
    return this.prisma.food_ratings.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.food_ratings.delete({
      where: { id },
    });
  }

  // Additional functionalities

  async rateFood(
    user_id: number,
    food_id: number,
    food_rate_point: number,
    food_rate_comment: string,
  ) {
    const existingRating = await this.prisma.food_ratings.findFirst({
      where: { user_id, food_id },
    });

    if (existingRating) {
      return this.prisma.food_ratings.update({
        where: { id: existingRating.id },
        data: { food_rate_point, food_rate_comment, updated_at: new Date() },
      });
    } else {
      return this.prisma.food_ratings.create({
        data: {
          user_id,
          food_id,
          food_rate_point,
          food_rate_comment,
          status: 1,
        },
      });
    }
  }

  async getAverageRating(food_id: number) {
    const ratings = await this.prisma.food_ratings.findMany({
      where: { food_id, status: 1 },
      select: { food_rate_point: true },
    });

    const totalRatings = ratings.length;
    const averageRating = totalRatings
      ? ratings.reduce((sum, rating) => sum + rating.food_rate_point, 0) /
        totalRatings
      : 0;

    return { food_id, totalRatings, averageRating };
  }

  async getUserRatings(user_id: number) {
    return this.prisma.food_ratings.findMany({
      where: { user_id, status: 1 },
      include: { foods: true },
    });
  }

  async getFoodRatings(food_id: number) {
    return this.prisma.food_ratings.findMany({
      where: { food_id, status: 1 },
      include: { users: true },
    });
  }
}
