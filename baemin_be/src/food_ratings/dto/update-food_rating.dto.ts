import { PartialType } from '@nestjs/mapped-types';
import { CreateFoodRatingDto } from './create-food_rating.dto';

export class UpdateFoodRatingDto extends PartialType(CreateFoodRatingDto) {}
