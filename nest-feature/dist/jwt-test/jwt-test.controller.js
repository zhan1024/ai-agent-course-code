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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtTestController = void 0;
const common_1 = require("@nestjs/common");
const jwt_test_service_1 = require("./jwt-test.service");
let JwtTestController = class JwtTestController {
    jwtTestService;
    constructor(jwtTestService) {
        this.jwtTestService = jwtTestService;
    }
    sign(payload) {
        const accessToken = this.jwtTestService.sign(payload);
        return { access_token: accessToken };
    }
    verify(authorization) {
        const token = this.extractBearerToken(authorization);
        if (!token) {
            throw new common_1.UnauthorizedException('请携带 Bearer Token');
        }
        return this.jwtTestService.verify(token);
    }
    extractBearerToken(authorization) {
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
exports.JwtTestController = JwtTestController;
__decorate([
    (0, common_1.Post)('sign'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], JwtTestController.prototype, "sign", null);
__decorate([
    (0, common_1.Get)('verify'),
    __param(0, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], JwtTestController.prototype, "verify", null);
exports.JwtTestController = JwtTestController = __decorate([
    (0, common_1.Controller)('jwt-test'),
    __metadata("design:paramtypes", [jwt_test_service_1.JwtTestService])
], JwtTestController);
//# sourceMappingURL=jwt-test.controller.js.map