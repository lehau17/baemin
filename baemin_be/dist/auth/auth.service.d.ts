import { UsersService } from 'src/user/user.service';
import { RegisterDto } from './dto/register.dto';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { users } from '@prisma/client';
export declare class AuthService {
    private usersService;
    private jwtService;
    private configService;
    constructor(usersService: UsersService, jwtService: JwtService, configService: ConfigService);
    validateUser(username: string, password: string): Promise<{
        id: number;
        usr_username: string | null;
        usr_first_name: string | null;
        usr_last_name: string | null;
        usr_phone: string | null;
        usr_email: string | null;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
    }>;
    register(payload: RegisterDto): Promise<{
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
    }>;
    login(user: users): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    getTokens(userId: number, username: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}
