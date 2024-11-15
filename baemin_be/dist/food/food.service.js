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
exports.FoodService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const restaurant_service_1 = require("../restaurant/restaurant.service");
let FoodService = class FoodService {
    constructor(prisma, restaurantService) {
        this.prisma = prisma;
        this.restaurantService = restaurantService;
    }
    async create(data, userId) {
        const foundRestaurant = await this.restaurantService.getRestaurantByUser(userId);
        if (!foundRestaurant) {
            throw new common_1.BadRequestException('Restaurant not exists');
        }
        const foundCate = await this.prisma.categories.findFirst({
            where: {
                id: data.cate_id,
            },
        });
        if (!foundCate) {
            throw new common_1.BadRequestException('cate not found');
        }
        const newFood = await this.prisma.foods.create({
            data: {
                food_images: data.food_images,
                food_name: data.food_name,
                categories: {
                    connect: { id: foundCate.id },
                },
                restaurants: {
                    connect: {
                        id: foundRestaurant.id,
                    },
                },
            },
        });
        if (!newFood)
            throw new common_1.BadRequestException('error occurred creating');
        await this.prisma.foods_details.create({
            data: {
                food_id: newFood.id,
                food_price: data.food_price,
                food_stock: data.food_stock || 0,
            },
        });
        return newFood;
    }
    async findAll({ limit = 20, skip = 0, cursor, }) {
        const options = {
            take: limit,
            where: {
                status: 1,
            },
        };
        if (cursor) {
            options.cursor = { id: cursor };
            options.skip = 1;
        }
        else {
            options.skip = skip;
        }
        const data = await this.prisma.foods.findMany(options);
        return {
            data: data,
            filter: {
                limit,
                skip,
            },
            cursor: {
                prevCursor: cursor,
                nextCursor: data.length > limit ? data[length - 1].id : null,
            },
        };
    }
    async findOne(id) {
        return this.prisma.foods.findUnique({
            where: { id },
        });
    }
    async findFood({ limit = 20, skip = 0, cursor, name, }) {
        const options = {
            take: limit,
            where: {
                status: 1,
                ...(name && {
                    food_name: {
                        contains: name,
                        mode: 'insensitive',
                    },
                }),
            },
        };
        if (cursor) {
            options.cursor = { id: cursor };
            options.skip = 1;
        }
        else {
            options.skip = skip;
        }
        const data = await this.prisma.foods.findMany(options);
        const nextCursor = data.length > limit ? data[data.length - 1].id : null;
        return {
            data,
            filter: {
                limit,
                skip,
                name,
            },
            cursor: {
                prevCursor: cursor || null,
                nextCursor,
            },
        };
    }
    async update(id, data) {
        return this.prisma.foods.update({
            where: { id },
            data,
        });
    }
    async remove(id) {
        return this.prisma.foods.update({
            where: { id },
            data: {
                status: 0,
            },
        });
    }
};
exports.FoodService = FoodService;
exports.FoodService = FoodService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        restaurant_service_1.RestaurantService])
], FoodService);
//# sourceMappingURL=food.service.js.map