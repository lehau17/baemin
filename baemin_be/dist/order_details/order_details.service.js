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
exports.OrderDetailsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let OrderDetailsService = class OrderDetailsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        return this.prisma.order_details.create({ data });
    }
    async findAllByOrderId(orderId) {
        return this.prisma.order_details.findMany({
            where: { order_id: orderId },
            include: { foods: true },
        });
    }
    async findOne(id) {
        return this.prisma.order_details.findUnique({
            where: { id },
            include: { foods: true },
        });
    }
    async update(id, data) {
        return this.prisma.order_details.update({
            where: { id },
            data,
        });
    }
    async remove(id) {
        return this.prisma.order_details.delete({
            where: { id },
        });
    }
};
exports.OrderDetailsService = OrderDetailsService;
exports.OrderDetailsService = OrderDetailsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OrderDetailsService);
//# sourceMappingURL=order_details.service.js.map