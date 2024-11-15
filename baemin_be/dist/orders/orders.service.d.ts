import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { CreateOrderDto } from './dto/create-order.dto';
import { CartsService } from 'src/carts/carts.service';
export declare class OrdersService {
    private prisma;
    private cartService;
    constructor(prisma: PrismaService, cartService: CartsService);
    create(data: CreateOrderDto, user_id: number): Promise<{
        id: number;
        user_id: number | null;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        total_amount: number;
        total_price: number;
        voucher_used: Prisma.JsonValue | null;
        address_shipping: Prisma.JsonValue | null;
    }>;
    findAllByUserId(userId: number): Promise<({
        order_details: {
            id: number;
            status: number | null;
            created_at: Date | null;
            updated_at: Date | null;
            total_price: number;
            order_id: number | null;
            food_id: number | null;
            quantity: number | null;
            price: number;
        }[];
    } & {
        id: number;
        user_id: number | null;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
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
            total_price: number;
            order_id: number | null;
            food_id: number | null;
            quantity: number | null;
            price: number;
        }[];
    } & {
        id: number;
        user_id: number | null;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        total_amount: number;
        total_price: number;
        voucher_used: Prisma.JsonValue | null;
        address_shipping: Prisma.JsonValue | null;
    }>;
    update(id: number, data: Prisma.ordersUpdateInput): Promise<{
        id: number;
        user_id: number | null;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        total_amount: number;
        total_price: number;
        voucher_used: Prisma.JsonValue | null;
        address_shipping: Prisma.JsonValue | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        user_id: number | null;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        total_amount: number;
        total_price: number;
        voucher_used: Prisma.JsonValue | null;
        address_shipping: Prisma.JsonValue | null;
    }>;
}
