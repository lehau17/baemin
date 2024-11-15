"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantRatingModule = void 0;
const common_1 = require("@nestjs/common");
const restaurant_rating_service_1 = require("./restaurant_rating.service");
const restaurant_rating_controller_1 = require("./restaurant_rating.controller");
const prisma_service_1 = require("../prisma/prisma.service");
let RestaurantRatingModule = class RestaurantRatingModule {
};
exports.RestaurantRatingModule = RestaurantRatingModule;
exports.RestaurantRatingModule = RestaurantRatingModule = __decorate([
    (0, common_1.Module)({
        controllers: [restaurant_rating_controller_1.RestaurantRatingController],
        providers: [restaurant_rating_service_1.RestaurantRatingService, prisma_service_1.PrismaService],
    })
], RestaurantRatingModule);
//# sourceMappingURL=restaurant_rating.module.js.map