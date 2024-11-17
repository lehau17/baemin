import 'express';
import { JwtPayload } from 'src/auth/accessToken.strategy';

declare global {
    namespace Express {
        interface Request {
            user?: JwtPayload
        }
    }
}
