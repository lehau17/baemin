import { CartsService } from './carts.service';
import { Prisma } from '@prisma/client';
export declare class CartsController {
    private readonly cartsService;
    constructor(cartsService: CartsService);
    create(req: any): Promise<{
        id: number;
        user_id: number | null;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
    }>;
    findAll(req: any, limit: string, skip: string, cursor: string): Promise<{
        id: number;
        user_id: number | null;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
    }>;
    getMyCart(req: any): Promise<{
        id: number;
        user_id: number | null;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
    }>;
    findOne(req: any, id: number): Promise<{
        id: number;
        user_id: number | null;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
    }>;
    update(req: any, id: number, data: Prisma.cartsUpdateInput): Promise<{
        id: number;
        user_id: number | null;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
    }>;
    remove(req: any, id: number): Promise<{
        id: number;
        user_id: number | null;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
    }>;
}
