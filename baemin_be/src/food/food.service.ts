import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFoodDto } from './dto/create-food.dto';
import { RestaurantService } from 'src/restaurant/restaurant.service';
import DataResponse from './dto/find_food.dto';

@Injectable()
export class FoodService {
  constructor(
    private prisma: PrismaService,
    private restaurantService: RestaurantService,
  ) { }

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
        id: newFood.id,
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
    cate,
    c_time = 1,
    from_price = 0,
    to_price,
  }: {
    limit?: number;
    skip?: number;
    cursor?: number;
    name?: string;
    cate?: number;
    c_time?: number;
    from_price?: number;
    to_price?: number;
  }) {
    // const options: Prisma.foodsFindManyArgs = {
    //   take: limit,
    //   include: {
    //     foods_details: {
    //       where: {
    //         food_price: {
    //           gt: from_price,
    //         },
    //       },
    //     },
    //   },
    //   orderBy: c_time
    //     ? {
    //       created_at: c_time == 1 ? 'desc' : 'asc',
    //     }
    //     : undefined,
    //   where: {
    //     status: 1,
    //     ...(cate && {
    //       cate_id: cate,
    //     }),
    //     ...(name && {
    //       food_name: {
    //         contains: name,
    //         mode: 'insensitive',
    //       },
    //     }),
    //   },
    // };

    // if (cursor) {
    //   options.cursor = { id: cursor };
    //   options.skip = 1;
    // } else {
    //   options.skip = skip;
    // }






    const data = await this.prisma.$queryRaw<DataResponse[]>`
        SELECT 
            f.id AS id,
            f.food_name,
            f.cate_id,
            f.food_description,
            f.food_total_like,
            f.food_total_rating,
            f.food_avg_rating,
            fd.food_price,
            fd.food_stock,
            f.created_at,
            f.updated_at
          FROM foods f
          INNER JOIN foods_details fd ON f.id = fd.id
          WHERE f.id > ${cursor ? cursor : 0} AND f.status = 1
          ${name ? Prisma.sql`AND f.food_name ILIKE ${'%' + name + '%'}` : Prisma.empty}
          ${cate ? Prisma.sql`AND f.cate_id = ${cate}` : Prisma.empty}
          ${from_price ? Prisma.sql`AND fd.food_price >= ${from_price}` : Prisma.empty}
          ${to_price ? Prisma.sql`AND fd.food_price <= ${to_price}` : Prisma.empty}
          ORDER BY ${c_time == 1 ? Prisma.sql`created_at desc` : `created_at asc`}
          LIMIT ${limit} OFFSET ${skip};
        `;

    const nextCursor = data.length > limit ? data[data.length - 1].id : null;

    return {
      data: data,
      filter: {
        limit,
        skip,
        name,
        cate,
        c_time,
        from_price,
        to_price,
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
