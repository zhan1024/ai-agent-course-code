"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
let UserService = class UserService {
    users = [
        {
            id: 1,
            username: 'admin',
            name: '管理员',
            age: 30,
            role: 'admin',
        },
        {
            id: 2,
            username: 'zhangsan',
            name: '张三',
            age: 25,
            role: 'user',
        },
    ];
    nextId = 3;
    create(createUserDto) {
        const user = {
            id: this.nextId++,
            username: createUserDto.username,
            name: createUserDto.name,
            age: createUserDto.age,
            role: 'user',
        };
        this.users.push(user);
        return user;
    }
    findAll() {
        return this.users;
    }
    findOne(id) {
        const user = this.users.find((item) => item.id === id);
        if (!user) {
            throw new common_1.NotFoundException(`用户 #${id} 不存在`);
        }
        return user;
    }
    update(id, updateUserDto) {
        const user = this.findOne(id);
        Object.assign(user, updateUserDto);
        return user;
    }
    remove(id) {
        const index = this.users.findIndex((item) => item.id === id);
        if (index === -1) {
            throw new common_1.NotFoundException(`用户 #${id} 不存在`);
        }
        const [removed] = this.users.splice(index, 1);
        return removed;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
//# sourceMappingURL=user.service.js.map