import { PrismaService } from '../prisma/prisma.service';
import { Prisma, users } from '@prisma/client';
import { RegisterDto } from 'src/auth/dto/register.dto';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: RegisterDto): Promise<users>;
    findAll(): Promise<users[]>;
    findOne(id: number): Promise<users>;
    update(id: number, data: Prisma.usersUpdateInput): Promise<users>;
    findUserBeUserName(email: string): Prisma.Prisma__usersClient<{
        id: number;
        usr_username: string | null;
        usr_password: string | null;
        usr_first_name: string | null;
        usr_last_name: string | null;
        usr_phone: string | null;
        usr_email: string | null;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): Promise<users>;
}
