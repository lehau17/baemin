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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const node_crypto_1 = require("node:crypto");
let UsersService = class UsersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        const foundUser = await this.prisma.users.findFirst({
            where: {
                usr_email: data.email,
                usr_username: data.username,
            },
        });
        if (foundUser) {
            throw new common_1.BadRequestException('email or username already exists');
        }
        const newUser = await this.prisma.users.create({
            data: {
                usr_email: data.email,
                usr_password: (0, node_crypto_1.createHmac)('sha256', data.password).digest('hex'),
                usr_username: data.username,
                usr_first_name: data.first_name,
                usr_last_name: data.last_name,
            },
        });
        await this.prisma.carts.create({
            data: {
                user_id: newUser.id,
            },
        });
        return newUser;
    }
    async findAll() {
        return this.prisma.users.findMany();
    }
    async findOne(id) {
        return this.prisma.users.findUnique({
            where: { id },
        });
    }
    async update(id, data) {
        return this.prisma.users.update({
            where: { id },
            data,
        });
    }
    findUserBeUserName(email) {
        return this.prisma.users.findFirst({ where: { usr_email: email } });
    }
    async remove(id) {
        return this.prisma.users.delete({
            where: { id },
        });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
//# sourceMappingURL=user.service.js.map