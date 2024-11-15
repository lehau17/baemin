import { Prisma, users } from '@prisma/client';
import { UsersService } from './user.service';
import { RegisterDto } from 'src/auth/dto/register.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(data: RegisterDto): Promise<users>;
    findAll(): Promise<users[]>;
    findOne(id: string): Promise<users>;
    update(id: string, data: Prisma.usersUpdateInput): Promise<users>;
    remove(id: string): Promise<users>;
}
