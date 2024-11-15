import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class CartsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(userId: number): Promise<{
        id: number;
        user_id: number | null;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
    }>;
    findAll(limit?: number, skip?: number, cursor?: number): Promise<{
        id: number;
        user_id: number | null;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        user_id: number | null;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
    }>;
    update(id: number, data: Prisma.cartsUpdateInput): Promise<{
        id: number;
        user_id: number | null;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        user_id: number | null;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
    }>;
    findByUserId(userId: number, limit?: number, skip?: number, cursor?: number): Promise<{
        id: number;
        user_id: number | null;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
    }>;
}
