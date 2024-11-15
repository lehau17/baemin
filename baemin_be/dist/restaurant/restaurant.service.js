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
exports.RestaurantService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let RestaurantService = class RestaurantService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data, userId) {
        console.log(userId);
        return this.prisma.restaurants.create({
            data: {
                ...data,
                users: {
                    connect: {
                        id: userId,
                    },
                },
            },
        });
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
        return this.prisma.restaurants.findMany(options);
    }
    async findOne(id) {
        return this.prisma.restaurants.findUnique({
            where: { id },
        });
    }
    async getRestaurantByUser(userId) {
        return this.prisma.restaurants.findFirst({
            where: {
                user_id: userId,
            },
        });
    }
    async update(id, data) {
        return this.prisma.restaurants.update({
            where: { id },
            data,
        });
    }
    async remove(id) {
        return this.prisma.restaurants.delete({
            where: { id },
        });
    }
};
exports.RestaurantService = RestaurantService;
exports.RestaurantService = RestaurantService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RestaurantService);
//# sourceMappingURL=restaurant.service.js.map