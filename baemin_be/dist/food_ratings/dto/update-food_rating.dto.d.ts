import { CreateFoodRatingDto } from './create-food_rating.dto';
declare const UpdateFoodRatingDto_base: import("@nestjs/mapped-types").MappedType<Partial<Omit<CreateFoodRatingDto, "food_id">>>;
export declare class UpdateFoodRatingDto extends UpdateFoodRatingDto_base {
}
export {};
