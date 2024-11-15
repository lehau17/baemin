import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCartItemDto } from './dto/create-cart_item.dto';
export declare class CartItemsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateCartItemDto, userId: number): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        food_id: number;
        quantity: number | null;
        cart_id: number;
        price: number | null;
    }>;
    findAll(limit?: number, skip?: number, cursor?: number): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        food_id: number;
        quantity: number | null;
        cart_id: number;
        price: number | null;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        food_id: number;
        quantity: number | null;
        cart_id: number;
        price: number | null;
    }>;
    update(id: number, data: Prisma.cart_itemsUpdateInput): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        food_id: number;
        quantity: number | null;
        cart_id: number;
        price: number | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        food_id: number;
        quantity: number | null;
        cart_id: number;
        price: number | null;
    }>;
}
