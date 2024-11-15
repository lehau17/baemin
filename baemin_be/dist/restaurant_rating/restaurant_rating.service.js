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
exports.RestaurantRatingService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let RestaurantRatingService = class RestaurantRatingService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        return this.prisma.restaurant_ratings.create({ data });
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
        return this.prisma.restaurant_ratings.findMany(options);
    }
    async findOne(id) {
        return this.prisma.restaurant_ratings.findUnique({
            where: { id },
        });
    }
    async update(id, data) {
        return this.prisma.restaurant_ratings.update({
            where: { id },
            data,
        });
    }
    async remove(id) {
        return this.prisma.restaurant_ratings.delete({
            where: { id },
        });
    }
    async getRestaurantAverageRating(res_id) {
        const ratings = await this.prisma.restaurant_ratings.findMany({
            where: { res_id },
            select: { res_rate_point: true },
        });
        if (ratings.length === 0)
            return null;
        const total = ratings.reduce((sum, rating) => sum + (rating.res_rate_point || 0), 0);
        return total / ratings.length;
    }
    async getUserRatings(user_id) {
        return this.prisma.restaurant_ratings.findMany({
            where: { user_id },
        });
    }
};
exports.RestaurantRatingService = RestaurantRatingService;
exports.RestaurantRatingService = RestaurantRatingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RestaurantRatingService);
//# sourceMappingURL=restaurant_rating.service.js.map