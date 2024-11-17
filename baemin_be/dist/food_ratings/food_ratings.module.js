"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodRatingsModule = void 0;
const common_1 = require("@nestjs/common");
const food_ratings_service_1 = require("./food_ratings.service");
const food_ratings_controller_1 = require("./food_ratings.controller");
const prisma_service_1 = require("../prisma/prisma.service");
const food_service_1 = require("../food/food.service");
const restaurant_service_1 = require("../restaurant/restaurant.service");
let FoodRatingsModule = class FoodRatingsModule {
};
exports.FoodRatingsModule = FoodRatingsModule;
exports.FoodRatingsModule = FoodRatingsModule = __decorate([
    (0, common_1.Module)({
        controllers: [food_ratings_controller_1.FoodRatingsController],
        providers: [food_ratings_service_1.FoodRatingsService, prisma_service_1.PrismaService, food_service_1.FoodService, restaurant_service_1.RestaurantService],
    })
], FoodRatingsModule);
//# sourceMappingURL=food_ratings.module.js.map