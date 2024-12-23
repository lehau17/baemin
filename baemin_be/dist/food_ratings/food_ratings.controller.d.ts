import { FoodRatingsService } from './food_ratings.service';
import { CreateFoodRatingDto } from './dto/create-food_rating.dto';
import { UpdateFoodRatingDto } from './dto/update-food_rating.dto';
import { PaginationDto } from 'src/common/paging/paging.dto';
export declare class FoodRatingsController {
    private readonly foodRatingsService;
    constructor(foodRatingsService: FoodRatingsService);
    create(createFoodRatingDto: CreateFoodRatingDto, req: Express.Request): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        user_id: number | null;
        food_id: number | null;
        food_rate_point: number | null;
        food_rate_comment: string | null;
    }>;
    findAll(limit: number, skip?: number, cursor?: number): Promise<{
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
    update(id: number, updateFoodRatingDto: UpdateFoodRatingDto, req: Express.Request): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        user_id: number | null;
        food_id: number | null;
        food_rate_point: number | null;
        food_rate_comment: string | null;
    }>;
    remove(id: number, req: Express.Request): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        user_id: number | null;
        food_id: number | null;
        food_rate_point: number | null;
        food_rate_comment: string | null;
    }>;
    rateFood({ food_id, food_rate_point, food_rate_comment, }: CreateFoodRatingDto, req: Express.Request): Promise<{
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
    getUserRatings(user_id: number, { cursor, limit, skip }: PaginationDto): Promise<{
        data: {
            id: number;
            status: number | null;
            created_at: Date | null;
            updated_at: Date | null;
            user_id: number | null;
            food_id: number | null;
            food_rate_point: number | null;
            food_rate_comment: string | null;
        }[];
        filter: {
            cursor: number;
            limit: number;
            skip: number;
        };
        cursor: {
            prevCursor: number;
            nextCursor: number;
        };
    }>;
    getRatingOfMe({ cursor, limit, skip }: PaginationDto, req: Express.Request): Promise<{
        data: {
            id: number;
            status: number | null;
            created_at: Date | null;
            updated_at: Date | null;
            user_id: number | null;
            food_id: number | null;
            food_rate_point: number | null;
            food_rate_comment: string | null;
        }[];
        filter: {
            cursor: number;
            limit: number;
            skip: number;
        };
        cursor: {
            prevCursor: number;
            nextCursor: number;
        };
    }>;
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
