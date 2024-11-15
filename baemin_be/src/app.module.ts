import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';

import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CategoriesModule } from './categories/categories.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import { FoodModule } from './food/food.module';
import { FoodsDetailModule } from './foods_detail/foods_detail.module';
import { RestaurantRatingModule } from './restaurant_rating/restaurant_rating.module';
import { FoodLikesModule } from './food_likes/food_likes.module';
import { FoodRatingsModule } from './food_ratings/food_ratings.module';
import { CartItemsModule } from './cart_items/cart_items.module';
import { CartsModule } from './carts/carts.module';
import { OrderDetailsModule } from './order_details/order_details.module';
import { OrdersModule } from './orders/orders.module';
import { VouchersModule } from './vouchers/vouchers.module';
import { AddressesModule } from './addresses/addresses.module';

@Module({
  imports: [AuthModule, ConfigModule.forRoot({ isGlobal: true }), UserModule, CategoriesModule, RestaurantModule, FoodModule, FoodsDetailModule, RestaurantRatingModule, FoodLikesModule, FoodRatingsModule, CartItemsModule, CartsModule, OrderDetailsModule, OrdersModule, VouchersModule, AddressesModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
