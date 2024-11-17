import { CreateFoodDto } from './create-food.dto';
declare const UpdateFoodDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateFoodDto>>;
export declare class UpdateFoodDto extends UpdateFoodDto_base {
    food_total_like: number;
    food_total_rating: number;
    food_avg_rating: number;
}
export {};
