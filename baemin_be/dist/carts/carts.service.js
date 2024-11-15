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
exports.CartsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CartsService = class CartsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(userId) {
        const foundCart = await this.prisma.carts.findFirst({
            where: {
                user_id: userId,
            },
        });
        if (foundCart)
            throw new common_1.BadRequestException('Cart with user exists');
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
        return this.prisma.carts.findMany(options);
    }
    async findOne(id) {
        return this.prisma.carts.findUnique({
            where: { id },
        });
    }
    async update(id, data) {
        return this.prisma.carts.update({
            where: { id },
            data,
        });
    }
    async remove(id) {
        return this.prisma.carts.delete({
            where: { id },
        });
    }
    async findByUserId(userId, limit = 20, skip, cursor) {
        const options = {
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
        }
        else if (skip) {
            options.skip = skip;
        }
        return this.prisma.carts.findFirst(options);
    }
};
exports.CartsService = CartsService;
exports.CartsService = CartsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CartsService);
//# sourceMappingURL=carts.service.js.map