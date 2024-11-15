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
exports.VouchersController = void 0;
const common_1 = require("@nestjs/common");
const vouchers_service_1 = require("./vouchers.service");
const client_1 = require("@prisma/client");
let VouchersController = class VouchersController {
    constructor(vouchersService) {
        this.vouchersService = vouchersService;
    }
    async create(data) {
        return this.vouchersService.create(data);
    }
    async findAll() {
        return this.vouchersService.findAll();
    }
    async findOne(id) {
        return this.vouchersService.findOne(id);
    }
    async findOneByCode(code) {
        return this.vouchersService.findOneByCode(code);
    }
    async update(id, data) {
        return this.vouchersService.update(id, data);
    }
    async remove(id) {
        return this.vouchersService.remove(id);
    }
};
exports.VouchersController = VouchersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], VouchersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VouchersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], VouchersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('code/:code'),
    __param(0, (0, common_1.Param)('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VouchersController.prototype, "findOneByCode", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], VouchersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], VouchersController.prototype, "remove", null);
exports.VouchersController = VouchersController = __decorate([
    (0, common_1.Controller)('vouchers'),
    __metadata("design:paramtypes", [vouchers_service_1.VouchersService])
], VouchersController);
//# sourceMappingURL=vouchers.controller.js.map