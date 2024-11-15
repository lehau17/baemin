"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const prisma_service_1 = require("./prisma/prisma.service");
const user_module_1 = require("./user/user.module");
const auth_module_1 = require("./auth/auth.module");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const categories_module_1 = require("./categories/categories.module");
const restaurant_module_1 = require("./restaurant/restaurant.module");
const food_module_1 = require("./food/food.module");
const foods_detail_module_1 = require("./foods_detail/foods_detail.module");
const restaurant_rating_module_1 = require("./restaurant_rating/restaurant_rating.module");
const food_likes_module_1 = require("./food_likes/food_likes.module");
const food_ratings_module_1 = require("./food_ratings/food_ratings.module");
const cart_items_module_1 = require("./cart_items/cart_items.module");
const carts_module_1 = require("./carts/carts.module");
const order_details_module_1 = require("./order_details/order_details.module");
const orders_module_1 = require("./orders/orders.module");
const vouchers_module_1 = require("./vouchers/vouchers.module");
const addresses_module_1 = require("./addresses/addresses.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule, config_1.ConfigModule.forRoot({ isGlobal: true }), user_module_1.UserModule, categories_module_1.CategoriesModule, restaurant_module_1.RestaurantModule, food_module_1.FoodModule, foods_detail_module_1.FoodsDetailModule, restaurant_rating_module_1.RestaurantRatingModule, food_likes_module_1.FoodLikesModule, food_ratings_module_1.FoodRatingsModule, cart_items_module_1.CartItemsModule, carts_module_1.CartsModule, order_details_module_1.OrderDetailsModule, orders_module_1.OrdersModule, vouchers_module_1.VouchersModule, addresses_module_1.AddressesModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, prisma_service_1.PrismaService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map