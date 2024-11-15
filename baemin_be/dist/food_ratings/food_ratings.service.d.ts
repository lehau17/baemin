import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class FoodRatingsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.food_ratingsCreateInput): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        user_id: number | null;
        food_id: number | null;
        food_rate_point: number | null;
        food_rate_comment: string | null;
    }>;
    findAll(limit?: number, skip?: number, cursor?: number): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        user_id: number | null;
        food_id: number | null;
        food_rate_point: number | null;
        food_rate_comment: string | null;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        user_id: number | null;
        food_id: number | null;
        food_rate_point: number | null;
        food_rate_comment: string | null;
    }>;
    update(id: number, data: Prisma.food_ratingsUpdateInput): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        user_id: number | null;
        food_id: number | null;
        food_rate_point: number | null;
        food_rate_comment: string | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        user_id: number | null;
        food_id: number | null;
        food_rate_point: number | null;
        food_rate_comment: string | null;
    }>;
    rateFood(user_id: number, food_id: number, food_rate_point: number, food_rate_comment: string): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        user_id: number | null;
        food_id: number | null;
        food_rate_point: number | null;
        food_rate_comment: string | null;
    }>;
    getAverageRating(food_id: number): Promise<{
        food_id: number;
        totalRatings: number;
        averageRating: number;
    }>;
    getUserRatings(user_id: number): Promise<({
        foods: {
            id: number;
            status: number | null;
            created_at: Date | null;
            updated_at: Date | null;
            res_id: number | null;
            food_name: string | null;
            food_description: string | null;
            food_images: string | null;
            food_total_like: number | null;
            food_total_rating: number | null;
            food_avg_rating: number | null;
            cate_id: number | null;
        };
    } & {
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        user_id: number | null;
        food_id: number | null;
        food_rate_point: number | null;
        food_rate_comment: string | null;
    })[]>;
    getFoodRatings(food_id: number): Promise<({
        users: {
            id: number;
            usr_username: string | null;
            usr_password: string | null;
            usr_first_name: string | null;
            usr_last_name: string | null;
            usr_phone: string | null;
            usr_email: string | null;
            status: number | null;
            created_at: Date | null;
            updated_at: Date | null;
        };
    } & {
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        user_id: number | null;
        food_id: number | null;
        food_rate_point: number | null;
        food_rate_comment: string | null;
    })[]>;
}
