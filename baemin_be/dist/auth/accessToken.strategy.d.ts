import { Strategy } from 'passport-jwt';
export type JwtPayload = {
    sub: number;
    username: string;
};
declare const AccessTokenStrategy_base: new (...args: any[]) => Strategy;
export declare class AccessTokenStrategy extends AccessTokenStrategy_base {
    constructor();
    validate(payload: JwtPayload): JwtPayload;
}
export {};
