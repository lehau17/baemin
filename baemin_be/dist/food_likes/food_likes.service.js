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
let FoodLikesService = class FoodLikesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        return this.prisma.food_likes.create({ data });
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
    async remove(id) {
        return this.prisma.food_likes.delete({
            where: { id },
        });
    }
    async toggleLike(user_id, food_id) {
        const existingLike = await this.prisma.food_likes.findFirst({
            where: { user_id, food_id },
        });
        if (existingLike) {
            await this.prisma.food_likes.delete({ where: { id: existingLike.id } });
            return { message: 'Unliked' };
        }
        else {
            await this.prisma.food_likes.create({
                data: { user_id, food_id, status: 1 },
            });
            return { message: 'Liked' };
        }
    }
    async getUserLikedFoods(user_id) {
        return this.prisma.food_likes.findMany({
            where: { user_id, status: 1 },
            include: { foods: true },
        });
    }
};
exports.FoodLikesService = FoodLikesService;
exports.FoodLikesService = FoodLikesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FoodLikesService);
//# sourceMappingURL=food_likes.service.js.map