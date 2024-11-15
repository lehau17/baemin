import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CartsService {
  constructor(private prisma: PrismaService) {}

  // Create a new cart for the authenticated user (using req.user.id for user_id)
  async create(userId: number) {
    const foundCart = await this.prisma.carts.findFirst({
      where: {
        user_id: userId,
      },
    });
    if (foundCart) throw new BadRequestException('Cart with user exists');
    return this.prisma.carts.create({
      data: {
        users: {
          connect: {
            id: userId,
          },
        },
        status: 1,
      },
    });
  }

  // Find all carts with pagination (supports cursor, limit, and skip)
  async findAll(limit = 20, skip?: number, cursor?: number) {
    const options: Prisma.cartsFindManyArgs = {
      take: limit,
      orderBy: {
        created_at: 'desc', // Sorting by creation date
      },
    };

    if (cursor) {
      options.skip = 1;
      options.cursor = { id: cursor };
    } else if (skip) {
      options.skip = skip;
    }

    return this.prisma.carts.findMany(options);
  }

  // Find a specific cart by its ID
  async findOne(id: number) {
    return this.prisma.carts.findUnique({
      where: { id },
    });
  }

  // Update an existing cart by its ID
  async update(id: number, data: Prisma.cartsUpdateInput) {
    return this.prisma.carts.update({
      where: { id },
      data,
    });
  }

  // Delete a cart by its ID
  async remove(id: number) {
    return this.prisma.carts.delete({
      where: { id },
    });
  }

  // Fetch carts for the authenticated user only (based on req.user.id)
  async findByUserId(
    userId: number,
    limit = 20,
    skip?: number,
    cursor?: number,
  ) {
    const options: Prisma.cartsFindManyArgs = {
      where: { user_id: userId },
      take: limit,
      orderBy: {
        created_at: 'desc',
      },
      include: {
        cart_items: {
          include: {
            foods: {
              include: {
                restaurants: true,
              },
            },
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

    return this.prisma.carts.findFirst(options);
  }
}
