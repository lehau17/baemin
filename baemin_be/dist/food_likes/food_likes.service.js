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
exports.FoodLikesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const food_service_1 = require("../food/food.service");
let FoodLikesService = class FoodLikesService {
    constructor(prisma, foodService) {
        this.prisma = prisma;
        this.foodService = foodService;
    }
    async create(data, sub) {
        const foundFood = await this.foodService.findOne(data.food_id);
        if (!foundFood || foundFood.status != 1)
            throw new common_1.BadRequestException('food not found');
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
            })]);
        return newLike;
    }
    async findAll(limit = 20, skip, cursor) {
        const options = {
            take: limit,
        };
        if (cursor) {
            options.skip = 1;
            options.cursor = { id: cursor };
        }
        else if (skip) {
            options.skip = skip;
        }
        return this.prisma.food_likes.findMany(options);
    }
    async findOne(id) {
        return this.prisma.food_likes.findUnique({
            where: { id },
        });
    }
    async update(id, data) {
        return this.prisma.food_likes.update({
            where: { id },
            data,
        });
    }
    async remove(id, user_id) {
        const foundLike = await this.prisma.food_likes.findFirst({
            where: {
                id
            }
        });
        if (!foundLike)
            throw new common_1.BadRequestException("food_likes not found");
        if (foundLike.user_id != user_id)
            throw new common_1.ForbiddenException('not allowed');
        const [data,] = await Promise.all([await this.prisma.food_likes.delete({
                where: { id },
            }), await this.foodService.desLike(foundLike.food_id)]);
        return data;
    }
    async toggleLike(user_id, food_id) {
        const existingLike = await this.prisma.food_likes.findFirst({
            where: { user_id, food_id },
        });
        if (existingLike) {
            await Promise.all([await this.prisma.food_likes.delete({ where: { id: existingLike.id } }),
                await this.foodService.desLike(existingLike.food_id)]);
            return { isDeleted: true };
        }
        else {
            await Promise.all([await this.prisma.food_likes.create({
                    data: { user_id, food_id, status: 1 },
                }),
                await this.foodService.incLike(food_id)]);
            return { isCreated: true };
        }
    }
    async getUserLikedFoods(user_id) {
        return this.prisma.food_likes.findMany({
            where: { user_id, status: 1 },
            include: { foods: true },
        });
    }
    async listUserLiked(food_id) {
        return this.prisma.food_likes.findMany({
            where: {
                food_id: food_id,
            },
            select: {
                id: true,
                users: {
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
};
exports.FoodLikesService = FoodLikesService;
exports.FoodLikesService = FoodLikesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, food_service_1.FoodService])
], FoodLikesService);
//# sourceMappingURL=food_likes.service.js.map