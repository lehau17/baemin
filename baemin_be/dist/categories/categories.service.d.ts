import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class CategoryService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.categoriesCreateInput): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        cate_name: string | null;
        cate_description: string | null;
        cate_icon: string | null;
    }>;
    findAll({ limit, skip, cursor, }: {
        limit?: number;
        skip?: number;
        cursor?: number;
    }): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        cate_name: string | null;
        cate_description: string | null;
        cate_icon: string | null;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        cate_name: string | null;
        cate_description: string | null;
        cate_icon: string | null;
    }>;
    update(id: number, data: Prisma.categoriesUpdateInput): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        cate_name: string | null;
        cate_description: string | null;
        cate_icon: string | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        cate_name: string | null;
        cate_description: string | null;
        cate_icon: string | null;
    }>;
}
