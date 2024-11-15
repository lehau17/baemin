import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class FoodLikesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.food_likesCreateInput): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        user_id: number | null;
        food_id: number | null;
    }>;
    findAll(limit?: number, skip?: number, cursor?: number): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        user_id: number | null;
        food_id: number | null;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        user_id: number | null;
        food_id: number | null;
    }>;
    update(id: number, data: Prisma.food_likesUpdateInput): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        user_id: number | null;
        food_id: number | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        user_id: number | null;
        food_id: number | null;
    }>;
    toggleLike(user_id: number, food_id: number): Promise<{
        message: string;
    }>;
    getUserLikedFoods(user_id: number): Promise<({
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
    })[]>;
}
