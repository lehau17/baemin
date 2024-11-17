import { OrdersService } from './orders.service';
import { Prisma } from '@prisma/client';
import { CreateOrderDto } from './dto/create-order.dto';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(data: CreateOrderDto, req: any): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        user_id: number | null;
        total_amount: number;
        total_price: number;
        voucher_used: Prisma.JsonValue | null;
        address_shipping: Prisma.JsonValue | null;
    }>;
    findAll(userId: number): Promise<({
        order_details: {
            id: number;
            status: number | null;
            created_at: Date | null;
            updated_at: Date | null;
            food_id: number | null;
            total_price: number;
            quantity: number | null;
            price: number;
            order_id: number | null;
        }[];
    } & {
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        user_id: number | null;
        total_amount: number;
        total_price: number;
        voucher_used: Prisma.JsonValue | null;
        address_shipping: Prisma.JsonValue | null;
    })[]>;
    findOne(id: number): Promise<{
        order_details: {
            id: number;
            status: number | null;
            created_at: Date | null;
            updated_at: Date | null;
            food_id: number | null;
            total_price: number;
            quantity: number | null;
            price: number;
            order_id: number | null;
        }[];
    } & {
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        user_id: number | null;
        total_amount: number;
        total_price: number;
        voucher_used: Prisma.JsonValue | null;
        address_shipping: Prisma.JsonValue | null;
    }>;
    update(id: number, data: Prisma.ordersUpdateInput): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        user_id: number | null;
        total_amount: number;
        total_price: number;
        voucher_used: Prisma.JsonValue | null;
        address_shipping: Prisma.JsonValue | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        user_id: number | null;
        total_amount: number;
        total_price: number;
        voucher_used: Prisma.JsonValue | null;
        address_shipping: Prisma.JsonValue | null;
    }>;
}
