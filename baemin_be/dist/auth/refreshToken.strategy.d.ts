import { Strategy } from 'passport-jwt';
import { Request } from 'express';
import { JwtPayload } from './accessToken.strategy';
declare const RefreshTokenStrategy_base: new (...args: any[]) => Strategy;
export declare class RefreshTokenStrategy extends RefreshTokenStrategy_base {
    constructor();
    validate(req: Request, payload: JwtPayload): {
        refreshToken: string;
        sub: number;
        username: string;
    };
}
export {};
