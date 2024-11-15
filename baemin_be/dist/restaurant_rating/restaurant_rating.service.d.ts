import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class RestaurantRatingService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.restaurant_ratingsCreateInput): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        user_id: number | null;
        res_rate_point: number | null;
        res_rate_comment: string | null;
        res_id: number | null;
    }>;
    findAll(limit?: number, skip?: number, cursor?: number): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        user_id: number | null;
        res_rate_point: number | null;
        res_rate_comment: string | null;
        res_id: number | null;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        user_id: number | null;
        res_rate_point: number | null;
        res_rate_comment: string | null;
        res_id: number | null;
    }>;
    update(id: number, data: Prisma.restaurant_ratingsUpdateInput): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        user_id: number | null;
        res_rate_point: number | null;
        res_rate_comment: string | null;
        res_id: number | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        user_id: number | null;
        res_rate_point: number | null;
        res_rate_comment: string | null;
        res_id: number | null;
    }>;
    getRestaurantAverageRating(res_id: number): Promise<number>;
    getUserRatings(user_id: number): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        user_id: number | null;
        res_rate_point: number | null;
        res_rate_comment: string | null;
        res_id: number | null;
    }[]>;
}
