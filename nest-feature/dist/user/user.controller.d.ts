import type { JwtPayload } from '../common/interfaces/api-response.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): import("./entities/user.entity").User;
    findAll(): import("./entities/user.entity").User[];
    ageDemo(age: number): {
        age: number;
        type: "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
    };
    findOne(id: number, currentUser: JwtPayload): {
        requestedBy: string;
        id: number;
        username: string;
        name: string;
        age: number;
        role: "admin" | "user";
    };
    update(id: number, updateUserDto: UpdateUserDto, currentUser: JwtPayload): {
        updatedBy: string;
        id: number;
        username: string;
        name: string;
        age: number;
        role: "admin" | "user";
    };
    remove(id: number): import("./entities/user.entity").User;
}
