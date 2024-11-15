import { FoodRatingsService } from './food_ratings.service';
import { CreateFoodRatingDto } from './dto/create-food_rating.dto';
import { UpdateFoodRatingDto } from './dto/update-food_rating.dto';
export declare class FoodRatingsController {
    private readonly foodRatingsService;
    constructor(foodRatingsService: FoodRatingsService);
    create(createFoodRatingDto: CreateFoodRatingDto): Promise<{
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
    update(id: number, updateFoodRatingDto: UpdateFoodRatingDto): Promise<{
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
    rateFood({ user_id, food_id, food_rate_point, food_rate_comment, }: CreateFoodRatingDto): Promise<{
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
