import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        accessToken: string;
        refreshToken: string;
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
}
