import { CartItemsService } from './cart_items.service';
import { CreateCartItemDto } from './dto/create-cart_item.dto';
import { UpdateCartItemDto } from './dto/update-cart_item.dto';
export declare class CartItemsController {
    private readonly cartItemsService;
    constructor(cartItemsService: CartItemsService);
    create(data: CreateCartItemDto, req: any): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        food_id: number;
        quantity: number | null;
        cart_id: number;
        price: number | null;
    }>;
    findAll(limit: string, skip: string, cursor: string): Promise<{
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
    update(id: number, data: UpdateCartItemDto): Promise<{
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
