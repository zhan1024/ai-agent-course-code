import { JwtTestService } from './jwt-test.service';
import type { JwtTestPayload } from './jwt-test.service';
export declare class JwtTestController {
    private readonly jwtTestService;
    constructor(jwtTestService: JwtTestService);
    sign(payload: JwtTestPayload): {
        access_token: string;
    };
    verify(authorization?: string): JwtTestPayload;
    private extractBearerToken;
}
