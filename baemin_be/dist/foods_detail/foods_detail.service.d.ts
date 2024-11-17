import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFoodsDetailDto } from './dto/create-foods_detail.dto';
export declare class FoodsDetailService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateFoodsDetailDto): Promise<{
        id: number;
        food_price: number;
        food_stock: number;
    }>;
    findAll(limit?: number, skip?: number, cursor?: number): Promise<{
        id: number;
        food_price: number;
        food_stock: number;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        food_price: number;
        food_stock: number;
    }>;
    update(id: number, data: Prisma.foods_detailsUpdateInput): Promise<{
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
