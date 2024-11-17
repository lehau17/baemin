import { Length } from 'class-validator';
import { Injectable, CallHandler, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { CreateOrderDto } from './dto/create-order.dto';
import { CartsService } from 'src/carts/carts.service';

@Injectable()
export class OrdersService {
  constructor(
    private prisma: PrismaService,
    private cartService: CartsService,
  ) { }

  async create(data: CreateOrderDto, user_id: number) {
    const myCart: any = await this.cartService.findByUserId(user_id);

    if (data.cart_items.length == 0) {
      throw new BadRequestException('data request invalid');
    }
    if (myCart.cart_items.length == 0) {
      throw new BadRequestException('Cart is empty');
    }

    for (let i = 0; i < data.cart_items.length; i++) {
      const orderItem = data.cart_items[i];

      const cartItem = myCart.cart_items.find(
        (cartItem) =>
          cartItem.food_id === orderItem.food_id &&
          cartItem.quantity === orderItem.quantity &&
          cartItem.price === orderItem.price,
      );

      if (!cartItem) {
        throw new BadRequestException(
          `Item with food_id ${orderItem.food_id} and quantity ${orderItem.quantity} does not match the items in the cart`,
        );
      }
    }
    let totalAmount = 0;
    let totalQuantity = 0;
    for (let i = 0; i < data.cart_items.length; i++) {
      const orderItem = data.cart_items[i];
      totalQuantity += orderItem.quantity;
      totalAmount += orderItem.price * orderItem.quantity;
    }

    const newOrder = await this.prisma.orders.create({
      data: {
        status: 1,
        total_amount: totalQuantity,
        address_shipping: data.address_shipping,
        users: {
          connect: {
            id: user_id,
          },
        },
        total_price: totalAmount,
        voucher_used: data.voucher_used as unknown as Prisma.InputJsonValue,
      },
    });
    const promiseArrayUpdateStock = data.cart_items.map((item) =>
      this.prisma.foods_details.updateMany({
        where: {
          id: item.food_id,
        },
        data: {
          food_stock: { decrement: item.quantity },
        },
      }),
    );
    await Promise.all([
      await this.prisma.order_details.createMany({
        data: data.cart_items.map((item) => {
          return {
            order_id: newOrder.id,
            food_id: item.food_id,
            quantity: item.quantity,
            price: item.price,
            total_price: item.quantity * item.price,
            status: 1,
          };
        }),
      }),
      await this.prisma.cart_items.deleteMany({
        where: {
          cart_id: myCart.id,
          food_id: { in: data.cart_items.map((item) => item.food_id) },
        },
      }),
      ...promiseArrayUpdateStock,
    ]);

    return newOrder;
  }
  // Find all orders for a user
  async findAllByUserId(userId: number) {
    return this.prisma.orders.findMany({
      where: { user_id: userId },
      include: { order_details: true }, // Including the related order details
    });
  }

  // Find a single order by ID
  async findOne(id: number) {
    return this.prisma.orders.findUnique({
      where: { id },
      include: { order_details: true },
    });
  }

  // Update an order
  async update(id: number, data: Prisma.ordersUpdateInput) {
    return this.prisma.orders.update({
      where: { id },
      data,
    });
  }

  // Delete an order by ID
  async remove(id: number) {
    return this.prisma.orders.delete({
      where: { id },
    });
  }
}
