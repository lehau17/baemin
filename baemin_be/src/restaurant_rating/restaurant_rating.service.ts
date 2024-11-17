import { BadRequestException, ForbiddenException, Injectable } from '@nestjs/common';
import { Prisma, users } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRestaurantRatingDto } from './dto/create-restaurant_rating.dto';

@Injectable()
export class RestaurantRatingService {
  constructor(private prisma: PrismaService) { }

  async create(data: CreateRestaurantRatingDto, userId: number) {

    const { res_id, res_rate_comment, res_rate_point } = data
    return this.prisma.restaurant_ratings.create({
      data: {
        res_rate_comment, res_rate_point, status: 1,
        restaurants: {
          connect: {
            id: res_id,
          }
        },
        users: {
          connect: {
            id: userId
          }
        }
      }
    });
  }

  async findAll({ limit = 20, skip = 0, cursor }: {
    limit?: number, skip?: number, cursor?: number
  }) {
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


  async findAllByRes({ limit = 20, skip = 0, cursor, id }: {
    limit?: number, skip?: number, cursor?: number, id: number
  }) {
    const options: Prisma.restaurant_ratingsFindManyArgs = {
      take: limit,
      where: {
        res_id: id
      }
    };

    if (cursor) {
      options.skip = 1;
      options.cursor = { id: cursor };
    } else if (skip) {
      options.skip = skip;
    }

    const data = await this.prisma.restaurant_ratings.findMany(options);
    const nextCursor = data.length > limit ? data[data.length - 1].id : null; // Xác định con trỏ tiếp theo

    return {
      data,
      filter: {
        limit,
        skip,
        name,
      },
      cursor: {
        prevCursor: cursor || null,
        nextCursor,
      },
    };

  }

  async findOne(id: number) {
    return this.prisma.restaurant_ratings.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: Prisma.restaurant_ratingsUpdateInput, userId: number) {
    const foundRating = await this.findOne(id)
    if (!foundRating || foundRating.status == 0) throw new BadRequestException("Not found rating")
    if (foundRating.user_id !== userId) throw new ForbiddenException("no permission to update this rating")
    return this.prisma.restaurant_ratings.update({
      where: { id },
      data,
    });
  }

  async remove(id: number, userId: number) {
    const foundRating = await this.findOne(id)
    if (!foundRating || foundRating.status == 0) throw new BadRequestException("Not found rating")
    if (foundRating.user_id !== userId) throw new ForbiddenException("no permission to delete this rating")
    return this.prisma.restaurant_ratings.update({
      where: { id, user_id: userId, status: 1 },
      data: {
        status: 0
      }
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
