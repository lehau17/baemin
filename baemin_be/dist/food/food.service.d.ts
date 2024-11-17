import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFoodDto } from './dto/create-food.dto';
import { RestaurantService } from 'src/restaurant/restaurant.service';
import DataResponse from './dto/find_food.dto';
export declare class FoodService {
    private prisma;
    private restaurantService;
    constructor(prisma: PrismaService, restaurantService: RestaurantService);
    create(data: CreateFoodDto, userId: number): Promise<{
        id: number;
        res_id: number | null;
        cate_id: number | null;
        food_name: string | null;
        food_description: string | null;
        food_images: string | null;
        food_total_like: number | null;
        food_total_rating: number | null;
        food_avg_rating: number | null;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
    }>;
    findAll({ limit, skip, cursor, }: {
        limit?: number;
        skip?: number;
        cursor?: number;
    }): Promise<{
        data: {
            id: number;
            res_id: number | null;
            cate_id: number | null;
            food_name: string | null;
            food_description: string | null;
            food_images: string | null;
            food_total_like: number | null;
            food_total_rating: number | null;
            food_avg_rating: number | null;
            status: number | null;
            created_at: Date | null;
            updated_at: Date | null;
        }[];
        filter: {
            limit: number;
            skip: number;
        };
        cursor: {
            prevCursor: number;
            nextCursor: number;
        };
    }>;
    findOne(id: number): Promise<{
        id: number;
        res_id: number | null;
        cate_id: number | null;
        food_name: string | null;
        food_description: string | null;
        food_images: string | null;
        food_total_like: number | null;
        food_total_rating: number | null;
        food_avg_rating: number | null;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
    }>;
    findFood({ limit, skip, cursor, name, cate, c_time, from_price, to_price, }: {
        limit?: number;
        skip?: number;
        cursor?: number;
        name?: string;
        cate?: number;
        c_time?: number;
        from_price?: number;
        to_price?: number;
    }): Promise<{
        data: DataResponse[];
        filter: {
            limit: number;
            skip: number;
            name: string;
            cate: number;
            c_time: number;
            from_price: number;
            to_price: number;
        };
        cursor: {
            prevCursor: number;
            nextCursor: number;
        };
    }>;
    update(id: number, data: Prisma.foodsUpdateInput): Promise<{
        id: number;
        res_id: number | null;
        cate_id: number | null;
        food_name: string | null;
        food_description: string | null;
        food_images: string | null;
        food_total_like: number | null;
        food_total_rating: number | null;
        food_avg_rating: number | null;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        res_id: number | null;
        cate_id: number | null;
        food_name: string | null;
        food_description: string | null;
        food_images: string | null;
        food_total_like: number | null;
        food_total_rating: number | null;
        food_avg_rating: number | null;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
    }>;
}
