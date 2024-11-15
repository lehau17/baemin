import {
  IsInt,
  IsOptional,
  IsString,
  IsJSON,
  IsNumber,
  IsObject,
} from 'class-validator';

export class CreateRestaurantDto {
  @IsString()
  res_name: string;

  @IsObject()
  res_address: object;

  @IsOptional()
  @IsNumber()
  res_avg_rating?: number;

  @IsOptional()
  @IsString()
  res_time_start: string;
  @IsOptional()
  @IsString()
  res_time_end: string;

  @IsOptional()
  @IsInt()
  res_total_rating?: number;

  @IsOptional()
  @IsInt()
  status?: number;

  @IsOptional()
  @IsString()
  res_description?: string;
}
