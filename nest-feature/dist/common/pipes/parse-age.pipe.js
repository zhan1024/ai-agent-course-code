"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseAgePipe = void 0;
const common_1 = require("@nestjs/common");
let ParseAgePipe = class ParseAgePipe {
    transform(value, metadata) {
        if (value === undefined || value === null || value === '') {
            throw new common_1.BadRequestException(`参数 ${metadata.data ?? 'age'} 不能为空`);
        }
        const parsed = Number(value);
        if (Number.isNaN(parsed) || !Number.isFinite(parsed)) {
            throw new common_1.BadRequestException(`参数 ${metadata.data ?? 'age'} 必须是有效数字，当前值: ${value}`);
        }
        if (parsed < 0 || parsed > 150) {
            throw new common_1.BadRequestException('年龄必须在 0 ~ 150 之间');
        }
        return parsed;
    }
};
exports.ParseAgePipe = ParseAgePipe;
exports.ParseAgePipe = ParseAgePipe = __decorate([
    (0, common_1.Injectable)()
], ParseAgePipe);
//# sourceMappingURL=parse-age.pipe.js.map