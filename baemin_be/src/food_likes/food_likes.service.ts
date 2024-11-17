import { BadRequestException, ForbiddenException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFoodLikeDto } from './dto/create-food_like.dto';
import { FoodService } from 'src/food/food.service';
import { UpdateFoodLikeDto } from './dto/update-food_like.dto';

@Injectable()
export class FoodLikesService {
  constructor(private prisma: PrismaService, private foodService: FoodService) { }

  async create(data: CreateFoodLikeDto, sub: number) {
    //check food
    const foundFood = await this.foodService.findOne(data.food_id)
    if (!foundFood || foundFood.status != 1) throw new BadRequestException('food not found')
    const [newLike,] = await Promise.all([await this.prisma.food_likes.create({
      data: {
        users: {
          connect: {
            id: sub
          }
        },
        foods: {
          connect: {
            id: foundFood.id
          }
        }
      }
    })])
    return newLike
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

  async update(id: number, data: UpdateFoodLikeDto) {
    return this.prisma.food_likes.update({
      where: { id },
      data,
    });
  }

  async remove(id: number, user_id: number) {
    const foundLike = await this.prisma.food_likes.findFirst({
      where: {
        id
      }
    })
    if (!foundLike) throw new BadRequestException("food_likes not found")
    if (foundLike.user_id != user_id) throw new ForbiddenException('not allowed')
    const [data,] = await Promise.all([await this.prisma.food_likes.delete({
      where: { id },
    }), await this.foodService.desLike(foundLike.food_id)])
    return data
  }

  // Additional functionalities

  async toggleLike(user_id: number, food_id: number) {
    const existingLike = await this.prisma.food_likes.findFirst({
      where: { user_id, food_id },
    });

    if (existingLike) {
      // Toggle off if already liked
      await Promise.all([await this.prisma.food_likes.delete({ where: { id: existingLike.id } }),
      await this.foodService.desLike(existingLike.food_id)])
      return { isDeleted: true };
    } else {
      // Create a new like
      await Promise.all([await this.prisma.food_likes.create({
        data: { user_id, food_id, status: 1 },
      }),
      await this.foodService.incLike(food_id)])
      return { isCreated: true };
    }
  }

  async getUserLikedFoods(user_id: number) {
    return this.prisma.food_likes.findMany({
      where: { user_id, status: 1 },
      include: { foods: true },
    });
  }

  async listUserLiked(food_id: number) {
    return this.prisma.food_likes.findMany({
      where: {
        food_id: food_id,
      },
      select: {
        id: true, // Trường từ bảng food_likes
        users: {   // Trường từ bảng users
          select: {
            id: true,
            usr_email: true,
            usr_first_name: true,
            usr_last_name: true,
          },
        },
      },
    });
  }

}
