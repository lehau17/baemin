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
exports.CartsController = void 0;
const common_1 = require("@nestjs/common");
const carts_service_1 = require("./carts.service");
const client_1 = require("@prisma/client");
const accessToken_guard_1 = require("../common/guard/accessToken.guard");
let CartsController = class CartsController {
    constructor(cartsService) {
        this.cartsService = cartsService;
    }
    async create(req) {
        console.log(req.user);
        return this.cartsService.create(req.user.sub);
    }
    async findAll(req, limit, skip, cursor) {
        const limitInt = parseInt(limit, 10) || 20;
        const skipInt = parseInt(skip, 10) || 0;
        const cursorInt = cursor ? parseInt(cursor, 10) : undefined;
        return this.cartsService.findByUserId(req.user.id, limitInt, skipInt, cursorInt);
    }
    async getMyCart(req) {
        return this.cartsService.findByUserId(req.user.sub);
    }
    async findOne(req, id) {
        const cart = await this.cartsService.findOne(id);
        if (cart.user_id !== req.user.id) {
            throw new Error("Unauthorized access to another user's cart");
        }
        return cart;
    }
    async update(req, id, data) {
        const cart = await this.cartsService.findOne(id);
        if (cart.user_id !== req.user.id) {
            throw new Error("Unauthorized access to another user's cart");
        }
        return this.cartsService.update(id, data);
    }
    async remove(req, id) {
        const cart = await this.cartsService.findOne(id);
        if (cart.user_id !== req.user.id) {
            throw new Error("Unauthorized access to another user's cart");
        }
        return this.cartsService.remove(id);
    }
};
exports.CartsController = CartsController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CartsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('skip')),
    __param(3, (0, common_1.Query)('cursor')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String]),
    __metadata("design:returntype", Promise)
], CartsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/me'),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CartsController.prototype, "getMyCart", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], CartsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, Object]),
    __metadata("design:returntype", Promise)
], CartsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], CartsController.prototype, "remove", null);
exports.CartsController = CartsController = __decorate([
    (0, common_1.Controller)('carts'),
    __metadata("design:paramtypes", [carts_service_1.CartsService])
], CartsController);
//# sourceMappingURL=carts.controller.js.map