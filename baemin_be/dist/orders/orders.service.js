"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const carts_service_1 = require("../carts/carts.service");
let OrdersService = class OrdersService {
    constructor(prisma, cartService) {
        this.prisma = prisma;
        this.cartService = cartService;
    }
    async create(data, user_id) {
        const myCart = await this.cartService.findByUserId(user_id);
        if (data.cart_items.length == 0) {
            throw new common_1.BadRequestException('data request invalid');
        }
        if (myCart.cart_items.length == 0) {
            throw new common_1.BadRequestException('Cart is empty');
        }
        for (let i = 0; i < data.cart_items.length; i++) {
            const orderItem = data.cart_items[i];
            const cartItem = myCart.cart_items.find((cartItem) => cartItem.food_id === orderItem.food_id &&
                cartItem.quantity === orderItem.quantity &&
                cartItem.price === orderItem.price);
            if (!cartItem) {
                throw new common_1.BadRequestException(`Item with food_id ${orderItem.food_id} and quantity ${orderItem.quantity} does not match the items in the cart`);
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
                voucher_used: data.voucher_used,
            },
        });
        const promiseArrayUpdateStock = data.cart_items.map((item) => this.prisma.foods_details.updateMany({
            where: {
                food_id: item.food_id,
            },
            data: {
                food_stock: { decrement: item.quantity },
            },
        }));
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
    async findAllByUserId(userId) {
        return this.prisma.orders.findMany({
            where: { user_id: userId },
            include: { order_details: true },
        });
    }
    async findOne(id) {
        return this.prisma.orders.findUnique({
            where: { id },
            include: { order_details: true },
        });
    }
    async update(id, data) {
        return this.prisma.orders.update({
            where: { id },
            data,
        });
    }
    async remove(id) {
        return this.prisma.orders.delete({
            where: { id },
        });
    }
};
exports.OrdersService = OrdersService;
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        carts_service_1.CartsService])
], OrdersService);
//# sourceMappingURL=orders.service.js.map