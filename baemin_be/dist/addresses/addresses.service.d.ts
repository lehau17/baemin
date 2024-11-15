import { PrismaService } from '../prisma/prisma.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
export declare class AddressesService {
    private prisma;
    constructor(prisma: PrismaService);
    getAddressesByUserId(userId: number): Promise<{
        id: number;
        user_id: number | null;
        adr_phone: string | null;
        adr_name: string | null;
        adr_address: string | null;
    }[]>;
    createAddress(data: CreateAddressDto, userId: number): Promise<{
        id: number;
        user_id: number | null;
        adr_phone: string | null;
        adr_name: string | null;
        adr_address: string | null;
    }>;
    updateAddress(id: number, data: UpdateAddressDto): Promise<{
        id: number;
        user_id: number | null;
        adr_phone: string | null;
        adr_name: string | null;
        adr_address: string | null;
    }>;
    deleteAddress(id: number): Promise<{
        id: number;
        user_id: number | null;
        adr_phone: string | null;
        adr_name: string | null;
        adr_address: string | null;
    }>;
}
