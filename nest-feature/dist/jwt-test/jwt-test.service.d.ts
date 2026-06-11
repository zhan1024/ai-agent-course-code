import { JwtService } from '@nestjs/jwt';
export interface JwtTestPayload {
    sub: number;
    username: string;
}
export declare class JwtTestService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    sign(payload: JwtTestPayload): string;
    verify(token: string): JwtTestPayload;
}
