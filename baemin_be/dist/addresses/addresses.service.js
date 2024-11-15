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
exports.AddressesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AddressesService = class AddressesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAddressesByUserId(userId) {
        return this.prisma.addresses.findMany({
            where: { user_id: userId },
        });
    }
    async createAddress(data, userId) {
        return this.prisma.addresses.create({
            data: {
                ...data,
                users: {
                    connect: {
                        id: userId,
                    },
                },
            },
        });
    }
    async updateAddress(id, data) {
        return this.prisma.addresses.update({
            where: { id },
            data,
        });
    }
    async deleteAddress(id) {
        return this.prisma.addresses.delete({
            where: { id },
        });
    }
};
exports.AddressesService = AddressesService;
exports.AddressesService = AddressesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AddressesService);
//# sourceMappingURL=addresses.service.js.map