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
exports.CartItemsController = void 0;
const common_1 = require("@nestjs/common");
const cart_items_service_1 = require("./cart_items.service");
const accessToken_guard_1 = require("../common/guard/accessToken.guard");
const create_cart_item_dto_1 = require("./dto/create-cart_item.dto");
const update_cart_item_dto_1 = require("./dto/update-cart_item.dto");
let CartItemsController = class CartItemsController {
    constructor(cartItemsService) {
        this.cartItemsService = cartItemsService;
    }
    async create(data, req) {
        return this.cartItemsService.create(data, req.user.sub);
    }
    async findAll(limit, skip, cursor) {
        const limitInt = parseInt(limit, 10) || 20;
        const skipInt = parseInt(skip, 10) || 0;
        const cursorInt = cursor ? parseInt(cursor, 10) : undefined;
        return this.cartItemsService.findAll(limitInt, skipInt, cursorInt);
    }
    async findOne(id) {
        return this.cartItemsService.findOne(id);
    }
    async update(id, data) {
        return this.cartItemsService.update(id, data);
    }
    async remove(id) {
        return this.cartItemsService.remove(id);
    }
};
exports.CartItemsController = CartItemsController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cart_item_dto_1.CreateCartItemDto, Object]),
    __metadata("design:returntype", Promise)
], CartItemsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('limit')),
    __param(1, (0, common_1.Query)('skip')),
    __param(2, (0, common_1.Query)('cursor')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], CartItemsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CartItemsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_cart_item_dto_1.UpdateCartItemDto]),
    __metadata("design:returntype", Promise)
], CartItemsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CartItemsController.prototype, "remove", null);
exports.CartItemsController = CartItemsController = __decorate([
    (0, common_1.Controller)('cart-items'),
    __metadata("design:paramtypes", [cart_items_service_1.CartItemsService])
], CartItemsController);
//# sourceMappingURL=cart_items.controller.js.map