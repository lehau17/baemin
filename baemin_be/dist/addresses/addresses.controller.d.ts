import { AddressesService } from './addresses.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
export declare class AddressesController {
    private readonly addressesService;
    constructor(addressesService: AddressesService);
    getAddressesByUserId(userId: number): Promise<{
        id: number;
        user_id: number | null;
        adr_phone: string | null;
        adr_name: string | null;
        adr_address: string | null;
    }[]>;
    createAddress(createAddressDto: CreateAddressDto, req: any): Promise<{
        id: number;
        user_id: number | null;
        adr_phone: string | null;
        adr_name: string | null;
        adr_address: string | null;
    }>;
    updateAddress(id: number, updateAddressDto: UpdateAddressDto): Promise<{
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
