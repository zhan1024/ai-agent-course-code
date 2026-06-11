import { JwtPayload } from '../common/interfaces/api-response.interface';
export declare class AuthService {
    private readonly tokenMap;
    validateToken(token: string): JwtPayload | null;
}
