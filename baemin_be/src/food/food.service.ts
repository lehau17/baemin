import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFoodDto } from './dto/create-food.dto';
import { RestaurantService } from 'src/restaurant/restaurant.service';

@Injectable()
export class FoodService {
  constructor(
    private prisma: PrismaService,
    private restaurantService: RestaurantService,
  ) {}

  async create(data: CreateFoodDto, userId: number) {
    const foundRestaurant =
      await this.restaurantService.getRestaurantByUser(userId);
    if (!foundRestaurant) {
      throw new BadRequestException('Restaurant not exists');
    }
    const foundCate = await this.prisma.categories.findFirst({
      where: {
        id: data.cate_id,
      },
    });
    if (!foundCate) {
      throw new BadRequestException('cate not found');
    }
    const newFood = await this.prisma.foods.create({
      data: {
        food_images: data.food_images,
        food_name: data.food_name,
        categories: {
          connect: { id: foundCate.id }, // Kết nối với danh mục có id = 1 trong bảng categories
        },
        restaurants: {
          connect: {
            id: foundRestaurant.id,
          },
        },
      },
    });
    if (!newFood) throw new BadRequestException('error occurred creating');
    await this.prisma.foods_details.create({
      data: {
        food_id: newFood.id,
        food_price: data.food_price,
        food_stock: data.food_stock || 0,
      },
    });
    return newFood;
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
    const options: Prisma.foodsFindManyArgs = {
      take: limit,
      where: {
        status: 1,
      },
    };

    if (cursor) {
      options.cursor = { id: cursor };
      options.skip = 1;
    } else {
      options.skip = skip;
    }
    const data = await this.prisma.foods.findMany(options);
    return {
      data: data,
      filter: {
        limit,
        skip,
      },
      cursor: {
        prevCursor: cursor,
        nextCursor: data.length > limit ? data[length - 1].id : null,
      },
    };
  }

  async findOne(id: number) {
    return this.prisma.foods.findUnique({
      where: { id },
    });
  }

  async findFood({
    limit = 20,
    skip = 0,
    cursor,
    name,
  }: {
    limit?: number;
    skip?: number;
    cursor?: number;
    name?: string;
  }) {
    const options: Prisma.foodsFindManyArgs = {
      take: limit,
      where: {
        status: 1,
        ...(name && {
          food_name: {
            contains: name,
            mode: 'insensitive',
          },
        }),
      },
    };

    if (cursor) {
      options.cursor = { id: cursor };
      options.skip = 1;
    } else {
      options.skip = skip;
    }

    const data = await this.prisma.foods.findMany(options);
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

  async update(id: number, data: Prisma.foodsUpdateInput) {
    return this.prisma.foods.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.foods.update({
      where: { id },
      data: {
        status: 0,
      },
    });
  }
}
