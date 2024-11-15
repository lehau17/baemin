import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RestaurantRatingService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.restaurant_ratingsCreateInput) {
    return this.prisma.restaurant_ratings.create({ data });
  }

  async findAll(limit = 20, skip?: number, cursor?: number) {
    const options: Prisma.restaurant_ratingsFindManyArgs = {
      take: limit,
    };

    if (cursor) {
      options.skip = 1;
      options.cursor = { id: cursor };
    } else if (skip) {
      options.skip = skip;
    }

    return this.prisma.restaurant_ratings.findMany(options);
  }

  async findOne(id: number) {
    return this.prisma.restaurant_ratings.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: Prisma.restaurant_ratingsUpdateInput) {
    return this.prisma.restaurant_ratings.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.restaurant_ratings.delete({
      where: { id },
    });
  }

  // Additional functionalities
  async getRestaurantAverageRating(res_id: number) {
    const ratings = await this.prisma.restaurant_ratings.findMany({
      where: { res_id },
      select: { res_rate_point: true },
    });

    if (ratings.length === 0) return null;

    const total = ratings.reduce(
      (sum, rating) => sum + (rating.res_rate_point || 0),
      0,
    );
    return total / ratings.length;
  }

  async getUserRatings(user_id: number) {
    return this.prisma.restaurant_ratings.findMany({
      where: { user_id },
    });
  }
}
