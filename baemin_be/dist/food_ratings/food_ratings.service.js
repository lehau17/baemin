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
exports.FoodRatingsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let FoodRatingsService = class FoodRatingsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        return this.prisma.food_ratings.create({ data });
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
        return this.prisma.food_ratings.findMany(options);
    }
    async findOne(id) {
        return this.prisma.food_ratings.findUnique({
            where: { id },
        });
    }
    async update(id, data) {
        return this.prisma.food_ratings.update({
            where: { id },
            data,
        });
    }
    async remove(id) {
        return this.prisma.food_ratings.delete({
            where: { id },
        });
    }
    async rateFood(user_id, food_id, food_rate_point, food_rate_comment) {
        const existingRating = await this.prisma.food_ratings.findFirst({
            where: { user_id, food_id },
        });
        if (existingRating) {
            return this.prisma.food_ratings.update({
                where: { id: existingRating.id },
                data: { food_rate_point, food_rate_comment, updated_at: new Date() },
            });
        }
        else {
            return this.prisma.food_ratings.create({
                data: {
                    user_id,
                    food_id,
                    food_rate_point,
                    food_rate_comment,
                    status: 1,
                },
            });
        }
    }
    async getAverageRating(food_id) {
        const ratings = await this.prisma.food_ratings.findMany({
            where: { food_id, status: 1 },
            select: { food_rate_point: true },
        });
        const totalRatings = ratings.length;
        const averageRating = totalRatings
            ? ratings.reduce((sum, rating) => sum + rating.food_rate_point, 0) /
                totalRatings
            : 0;
        return { food_id, totalRatings, averageRating };
    }
    async getUserRatings(user_id) {
        return this.prisma.food_ratings.findMany({
            where: { user_id, status: 1 },
            include: { foods: true },
        });
    }
    async getFoodRatings(food_id) {
        return this.prisma.food_ratings.findMany({
            where: { food_id, status: 1 },
            include: { users: true },
        });
    }
};
exports.FoodRatingsService = FoodRatingsService;
exports.FoodRatingsService = FoodRatingsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FoodRatingsService);
//# sourceMappingURL=food_ratings.service.js.map