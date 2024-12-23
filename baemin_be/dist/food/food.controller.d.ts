import { FoodService } from './food.service';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
export declare class FoodController {
    private readonly foodService;
    constructor(foodService: FoodService);
    create(createFoodDto: CreateFoodDto, req: any): Promise<{
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
    }>;
    findAll(limit?: number, skip?: number, cursor?: number): Promise<{
        data: {
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
    searchFood(limit?: number, skip?: number, cursor?: number, name?: string, cate_id?: string, c_time?: string, from_price?: number, to_price?: string): Promise<{
        data: import("./dto/find_food.dto").default[];
        filter: {
            limit: number;
            skip: number;
            name: string;
            cate: number;
            c_time: number;
            from_price: number;
            to_price: number;
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
        res_id: number | null;
        food_name: string | null;
        food_description: string | null;
        food_images: string | null;
        food_total_like: number | null;
        food_total_rating: number | null;
        food_avg_rating: number | null;
        cate_id: number | null;
    }>;
    update(id: number, updateFoodDto: UpdateFoodDto): Promise<{
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
    }>;
    remove(id: number): Promise<{
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
    }>;
}
