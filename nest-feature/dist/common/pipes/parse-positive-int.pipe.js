"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParsePositiveIntPipe = void 0;
const common_1 = require("@nestjs/common");
let ParsePositiveIntPipe = class ParsePositiveIntPipe {
    transform(value, metadata) {
        const parsed = Number.parseInt(value, 10);
        if (Number.isNaN(parsed) ||
            parsed <= 0 ||
            !Number.isInteger(parsed) ||
            String(parsed) !== value) {
            throw new common_1.BadRequestException(`参数 ${metadata.data ?? 'id'} 必须是正整数，当前值: ${value}`);
        }
        return parsed;
    }
};
exports.ParsePositiveIntPipe = ParsePositiveIntPipe;
exports.ParsePositiveIntPipe = ParsePositiveIntPipe = __decorate([
    (0, common_1.Injectable)()
], ParsePositiveIntPipe);
//# sourceMappingURL=parse-positive-int.pipe.js.map