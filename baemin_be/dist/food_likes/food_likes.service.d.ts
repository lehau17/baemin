import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFoodLikeDto } from './dto/create-food_like.dto';
import { FoodService } from 'src/food/food.service';
import { UpdateFoodLikeDto } from './dto/update-food_like.dto';
export declare class FoodLikesService {
    private prisma;
    private foodService;
    constructor(prisma: PrismaService, foodService: FoodService);
    create(data: CreateFoodLikeDto, sub: number): Promise<{
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
    update(id: number, data: UpdateFoodLikeDto): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        user_id: number | null;
        food_id: number | null;
    }>;
    remove(id: number, user_id: number): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        user_id: number | null;
        food_id: number | null;
    }>;
    toggleLike(user_id: number, food_id: number): Promise<{
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
    listUserLiked(food_id: number): Promise<{
        users: {
            id: number;
            usr_first_name: string;
            usr_last_name: string;
            usr_email: string;
        };
        id: number;
    }[]>;
}
