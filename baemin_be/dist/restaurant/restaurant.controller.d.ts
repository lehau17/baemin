import { RestaurantService } from './restaurant.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
export declare class RestaurantController {
    private readonly restaurantService;
    constructor(restaurantService: RestaurantService);
    create(createRestaurantDto: CreateRestaurantDto, req: any): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        user_id: number | null;
        res_name: string;
        res_address: import("@prisma/client/runtime/library").JsonValue;
        res_avg_rating: number | null;
        res_time_start: string | null;
        res_time_end: string | null;
        res_total_rating: number | null;
        res_description: string | null;
    }>;
    findAll(limit: number, skip?: number, cursor?: number): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        user_id: number | null;
        res_name: string;
        res_address: import("@prisma/client/runtime/library").JsonValue;
        res_avg_rating: number | null;
        res_time_start: string | null;
        res_time_end: string | null;
        res_total_rating: number | null;
        res_description: string | null;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        user_id: number | null;
        res_name: string;
        res_address: import("@prisma/client/runtime/library").JsonValue;
        res_avg_rating: number | null;
        res_time_start: string | null;
        res_time_end: string | null;
        res_total_rating: number | null;
        res_description: string | null;
    }>;
    update(id: number, updateRestaurantDto: UpdateRestaurantDto): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        user_id: number | null;
        res_name: string;
        res_address: import("@prisma/client/runtime/library").JsonValue;
        res_avg_rating: number | null;
        res_time_start: string | null;
        res_time_end: string | null;
        res_total_rating: number | null;
        res_description: string | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        user_id: number | null;
        res_name: string;
        res_address: import("@prisma/client/runtime/library").JsonValue;
        res_avg_rating: number | null;
        res_time_start: string | null;
        res_time_end: string | null;
        res_total_rating: number | null;
        res_description: string | null;
    }>;
}
