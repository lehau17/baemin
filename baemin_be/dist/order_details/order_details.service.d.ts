import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class OrderDetailsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.order_detailsCreateInput): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        food_id: number | null;
        total_price: number;
        quantity: number | null;
        price: number;
        order_id: number | null;
    }>;
    findAllByOrderId(orderId: number): Promise<({
        foods: {
            id: number;
            status: number | null;
            created_at: Date | null;
            updated_at: Date | null;
            res_id: number | null;
            food_name: string | null;
            food_description: string | null;
            food_images: string | null;
            food_total_like: number | null;
            food_total_rating: number | null;
            food_avg_rating: number | null;
            cate_id: number | null;
        };
    } & {
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        food_id: number | null;
        total_price: number;
        quantity: number | null;
        price: number;
        order_id: number | null;
    })[]>;
    findOne(id: number): Promise<{
        foods: {
            id: number;
            status: number | null;
            created_at: Date | null;
            updated_at: Date | null;
            res_id: number | null;
            food_name: string | null;
            food_description: string | null;
            food_images: string | null;
            food_total_like: number | null;
            food_total_rating: number | null;
            food_avg_rating: number | null;
            cate_id: number | null;
        };
    } & {
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        food_id: number | null;
        total_price: number;
        quantity: number | null;
        price: number;
        order_id: number | null;
    }>;
    update(id: number, data: Prisma.order_detailsUpdateInput): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        food_id: number | null;
        total_price: number;
        quantity: number | null;
        price: number;
        order_id: number | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        food_id: number | null;
        total_price: number;
        quantity: number | null;
        price: number;
        order_id: number | null;
    }>;
}
