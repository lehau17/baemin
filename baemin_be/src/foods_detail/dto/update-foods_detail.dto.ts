import { PartialType } from '@nestjs/mapped-types';
import { CreateFoodsDetailDto } from './create-foods_detail.dto';

export class UpdateFoodsDetailDto extends PartialType(CreateFoodsDetailDto) {}
