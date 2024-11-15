import { IsIn, IsInt, isInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateCartItemDto {
  @IsInt()
  @IsNotEmpty()
  food_id: number;

  @IsInt()
  @IsNotEmpty()
  quantity: number;
}
