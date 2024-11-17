import { RestaurantRatingService } from './restaurant_rating.service';
import { CreateRestaurantRatingDto } from './dto/create-restaurant_rating.dto';
import { UpdateRestaurantRatingDto } from './dto/update-restaurant_rating.dto';
export declare class RestaurantRatingController {
    private readonly restaurantRatingService;
    constructor(restaurantRatingService: RestaurantRatingService);
    create(createRestaurantRatingDto: CreateRestaurantRatingDto, req: Express.Request): Promise<{
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
    findAllByRes(id: string, limit?: number, skip?: number, cursor?: number): Promise<{
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
    update(id: number, req: Express.Request, updateRestaurantRatingDto: UpdateRestaurantRatingDto): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        user_id: number | null;
        res_rate_point: number | null;
        res_rate_comment: string | null;
        res_id: number | null;
    }>;
    remove(id: number, req: Express.Request): Promise<{
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
