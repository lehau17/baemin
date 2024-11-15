import { FoodService } from './food.service';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
export declare class FoodController {
    private readonly foodService;
    constructor(foodService: FoodService);
    create(createFoodDto: CreateFoodDto, req: any): Promise<{
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
    findAll(limit?: number, skip?: number, cursor?: number): Promise<{
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
    searchFood(limit?: number, skip?: number, cursor?: number, name?: string): Promise<{
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
            name: string;
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
    update(id: number, updateFoodDto: UpdateFoodDto): Promise<{
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
