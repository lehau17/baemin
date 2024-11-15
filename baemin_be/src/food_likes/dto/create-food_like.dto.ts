import { IsInt, IsOptional } from 'class-validator';

export class CreateFoodLikeDto {
  @IsOptional()
  @IsInt()
  user_id?: number;

  @IsOptional()
  @IsInt()
  food_id?: number;

  @IsOptional()
  @IsInt()
  status?: number;
}
