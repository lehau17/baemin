import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCartItemDto } from './dto/create-cart_item.dto';

@Injectable()
export class CartItemsService {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateCartItemDto, userId: number) {
    const [foundCart, foundFood] = await Promise.all([
      await this.prisma.carts.findFirst({
        where: {
          user_id: userId,
        },
      }),
      await this.prisma.foods.findFirst({
        where: {
          id: data.food_id,
        },
        include: {
          foods_details: true,
        },
      }),
    ]);

    const foundCartItem = await this.prisma.cart_items.findFirst({
      where: {
        cart_id: foundCart.id,
        food_id: data.food_id,
      },
    });

    if (foundCartItem) {
      return this.prisma.cart_items.update({
        where: {
          id: foundCartItem.id,
        },
        data: {
          quantity: foundCartItem.quantity + data.quantity,
        },
      });
    }
    return this.prisma.cart_items.create({
      data: {
        cart_id: foundCart.id,
        food_id: data.food_id,
        quantity: data.quantity,
        price: foundFood.foods_details[0].food_price,
        status: 1,
      },
    });
  }

  async findAll(limit = 20, skip?: number, cursor?: number) {
    const options: Prisma.cart_itemsFindManyArgs = {
      take: limit,
      orderBy: {
        created_at: 'desc', // Optional: Sorting by creation date, you can modify it to any field you want
      },
    };

    if (cursor) {
      options.skip = 1; // Skip the cursor item itself
      options.cursor = { id: cursor };
    } else if (skip) {
      options.skip = skip; // Apply skip if cursor is not used
    }

    return this.prisma.cart_items.findMany(options);
  }

  // Find a single cart item by ID
  async findOne(id: number) {
    return this.prisma.cart_items.findUnique({
      where: { id },
    });
  }

  // Update a cart item by ID
  async update(id: number, data: Prisma.cart_itemsUpdateInput) {
    return this.prisma.cart_items.update({
      where: { id },
      data,
    });
  }

  // Delete a cart item by ID
  async remove(id: number) {
    return this.prisma.cart_items.delete({
      where: { id },
    });
  }
}
