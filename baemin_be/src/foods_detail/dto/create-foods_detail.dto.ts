import { IsInt, IsNumber, IsOptional } from 'class-validator';

export class CreateFoodsDetailDto {
  @IsInt()
  food_id?: number;

  @IsOptional()
  @IsNumber()
  food_price?: number;

  @IsOptional()
  @IsInt()
  food_stock?: number;
}
