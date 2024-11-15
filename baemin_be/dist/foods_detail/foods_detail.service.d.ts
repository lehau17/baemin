import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class FoodsDetailService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.foods_detailsCreateInput): Promise<{
        id: number;
        food_id: number | null;
        food_price: number | null;
        food_stock: number | null;
    }>;
    findAll(limit?: number, skip?: number, cursor?: number): Promise<{
        id: number;
        food_id: number | null;
        food_price: number | null;
        food_stock: number | null;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        food_id: number | null;
        food_price: number | null;
        food_stock: number | null;
    }>;
    update(id: number, data: Prisma.foods_detailsUpdateInput): Promise<{
        id: number;
        food_id: number | null;
        food_price: number | null;
        food_stock: number | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        food_id: number | null;
        food_price: number | null;
        food_stock: number | null;
    }>;
}
