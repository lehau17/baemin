import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRestaurantRatingDto } from './dto/create-restaurant_rating.dto';
export declare class RestaurantRatingService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateRestaurantRatingDto, userId: number): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        user_id: number | null;
        res_rate_point: number | null;
        res_rate_comment: string | null;
        res_id: number | null;
    }>;
    findAll({ limit, skip, cursor }: {
        limit?: number;
        skip?: number;
        cursor?: number;
    }): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        user_id: number | null;
        res_rate_point: number | null;
        res_rate_comment: string | null;
        res_id: number | null;
    }[]>;
    findAllByRes({ limit, skip, cursor, id }: {
        limit?: number;
        skip?: number;
        cursor?: number;
        id: number;
    }): Promise<{
        data: {
            id: number;
            status: number | null;
            created_at: Date | null;
            updated_at: Date | null;
            user_id: number | null;
            res_rate_point: number | null;
            res_rate_comment: string | null;
            res_id: number | null;
        }[];
        filter: {
            limit: number;
            skip: number;
            name: void;
        };
        cursor: {
            prevCursor: number;
            nextCursor: number;
        };
    }>;
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
    update(id: number, data: Prisma.restaurant_ratingsUpdateInput, userId: number): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        user_id: number | null;
        res_rate_point: number | null;
        res_rate_comment: string | null;
        res_id: number | null;
    }>;
    remove(id: number, userId: number): Promise<{
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
