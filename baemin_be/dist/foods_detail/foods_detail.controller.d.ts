import { FoodsDetailService } from './foods_detail.service';
import { CreateFoodsDetailDto } from './dto/create-foods_detail.dto';
import { UpdateFoodsDetailDto } from './dto/update-foods_detail.dto';
export declare class FoodsDetailController {
    private readonly foodsDetailService;
    constructor(foodsDetailService: FoodsDetailService);
    create(createFoodsDetailDto: CreateFoodsDetailDto): Promise<{
        id: number;
        food_price: number;
        food_stock: number;
    }>;
    findAll(limit: number, skip?: number, cursor?: number): Promise<{
        id: number;
        food_price: number;
        food_stock: number;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        food_price: number;
        food_stock: number;
    }>;
    update(id: number, updateFoodsDetailDto: UpdateFoodsDetailDto): Promise<{
        id: number;
        food_price: number;
        food_stock: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        food_price: number;
        food_stock: number;
    }>;
}
