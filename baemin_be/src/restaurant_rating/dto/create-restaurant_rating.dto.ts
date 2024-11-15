import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreateRestaurantRatingDto {
  @IsOptional()
  @IsInt()
  user_id?: number;

  @IsOptional()
  @IsInt()
  res_id?: number;

  @IsOptional()
  @IsInt()
  res_rate_point?: number;

  @IsOptional()
  @IsString()
  res_rate_comment?: string;

  @IsOptional()
  @IsInt()
  status?: number;
}
