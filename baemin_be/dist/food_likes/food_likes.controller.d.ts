import { FoodLikesService } from './food_likes.service';
import { CreateFoodLikeDto } from './dto/create-food_like.dto';
import { UpdateFoodLikeDto } from './dto/update-food_like.dto';
export declare class FoodLikesController {
    private readonly foodLikesService;
    constructor(foodLikesService: FoodLikesService);
    create(createFoodLikeDto: CreateFoodLikeDto, req: Express.Request): Promise<{
        id: number;
        user_id: number | null;
        food_id: number | null;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
    }>;
    findAll(limit: number, skip?: number, cursor?: number): Promise<{
        id: number;
        user_id: number | null;
        food_id: number | null;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        user_id: number | null;
        food_id: number | null;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
    }>;
    update(id: number, updateFoodLikeDto: UpdateFoodLikeDto): Promise<{
        id: number;
        user_id: number | null;
        food_id: number | null;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
    }>;
    remove(id: number, req: Express.Request): Promise<{
        id: number;
        user_id: number | null;
        food_id: number | null;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
    }>;
    toggleLike(id: string, req: Express.Request): Promise<{
        isDeleted: boolean;
        isCreated?: undefined;
    } | {
        isCreated: boolean;
        isDeleted?: undefined;
    }>;
    getUserLikedFoods(user_id: number): Promise<({
        foods: {
            id: number;
            status: number | null;
            created_at: Date | null;
            updated_at: Date | null;
            res_id: number | null;
            cate_id: number | null;
            food_name: string | null;
            food_description: string | null;
            food_images: string | null;
            food_total_like: number | null;
            food_total_rating: number | null;
            food_avg_rating: number | null;
        };
    } & {
        id: number;
        user_id: number | null;
        food_id: number | null;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
    })[]>;
    listUserLiked(id: string): Promise<{
        id: number;
        users: {
            id: number;
            usr_first_name: string;
            usr_last_name: string;
            usr_email: string;
        };
    }[]>;
}
