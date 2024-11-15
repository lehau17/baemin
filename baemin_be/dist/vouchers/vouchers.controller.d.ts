import { VouchersService } from './vouchers.service';
import { Prisma } from '@prisma/client';
export declare class VouchersController {
    private readonly vouchersService;
    constructor(vouchersService: VouchersService);
    create(data: Prisma.vouchersCreateInput): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        code: string;
        discount_percent: number | null;
        discount_amount: number | null;
        minimum_order: number | null;
        valid_from: Date;
        valid_to: Date;
    }>;
    findAll(): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        code: string;
        discount_percent: number | null;
        discount_amount: number | null;
        minimum_order: number | null;
        valid_from: Date;
        valid_to: Date;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        code: string;
        discount_percent: number | null;
        discount_amount: number | null;
        minimum_order: number | null;
        valid_from: Date;
        valid_to: Date;
    }>;
    findOneByCode(code: string): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        code: string;
        discount_percent: number | null;
        discount_amount: number | null;
        minimum_order: number | null;
        valid_from: Date;
        valid_to: Date;
    }>;
    update(id: number, data: Prisma.vouchersUpdateInput): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        code: string;
        discount_percent: number | null;
        discount_amount: number | null;
        minimum_order: number | null;
        valid_from: Date;
        valid_to: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        code: string;
        discount_percent: number | null;
        discount_amount: number | null;
        minimum_order: number | null;
        valid_from: Date;
        valid_to: Date;
    }>;
}
