"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuard = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("../../auth/auth.service");
let AuthGuard = class AuthGuard {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const token = this.extractToken(request.headers.authorization);
        if (!token) {
            throw new common_1.UnauthorizedException('请先登录，携带合法 Token');
        }
        const user = this.authService.validateToken(token);
        if (!user) {
            throw new common_1.UnauthorizedException('Token 无效或已过期');
        }
        request.user = user;
        const targetId = request.params.id;
        if (targetId !== undefined) {
            const id = Number.parseInt(targetId, 10);
            if (user.role !== 'admin' && user.id !== id) {
                throw new common_1.ForbiddenException('无权访问其他用户信息');
            }
        }
        return true;
    }
    extractToken(authorization) {
        if (!authorization) {
            return null;
        }
        const [type, token] = authorization.split(' ');
        if (type !== 'Bearer' || !token) {
            return null;
        }
        return token;
    }
};
exports.AuthGuard = AuthGuard;
exports.AuthGuard = AuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthGuard);
//# sourceMappingURL=auth.guard.js.map