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
exports.CartItemsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CartItemsService = class CartItemsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data, userId) {
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
    async findAll(limit = 20, skip, cursor) {
        const options = {
            take: limit,
            orderBy: {
                created_at: 'desc',
            },
        };
        if (cursor) {
            options.skip = 1;
            options.cursor = { id: cursor };
        }
        else if (skip) {
            options.skip = skip;
        }
        return this.prisma.cart_items.findMany(options);
    }
    async findOne(id) {
        return this.prisma.cart_items.findUnique({
            where: { id },
        });
    }
    async update(id, data) {
        return this.prisma.cart_items.update({
            where: { id },
            data,
        });
    }
    async remove(id) {
        return this.prisma.cart_items.delete({
            where: { id },
        });
    }
};
exports.CartItemsService = CartItemsService;
exports.CartItemsService = CartItemsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CartItemsService);
//# sourceMappingURL=cart_items.service.js.map