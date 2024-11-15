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
exports.FoodsDetailController = void 0;
const common_1 = require("@nestjs/common");
const foods_detail_service_1 = require("./foods_detail.service");
const create_foods_detail_dto_1 = require("./dto/create-foods_detail.dto");
const update_foods_detail_dto_1 = require("./dto/update-foods_detail.dto");
let FoodsDetailController = class FoodsDetailController {
    constructor(foodsDetailService) {
        this.foodsDetailService = foodsDetailService;
    }
    create(createFoodsDetailDto) {
        return this.foodsDetailService.create(createFoodsDetailDto);
    }
    findAll(limit, skip, cursor) {
        return this.foodsDetailService.findAll(limit, skip, cursor);
    }
    findOne(id) {
        return this.foodsDetailService.findOne(id);
    }
    update(id, updateFoodsDetailDto) {
        return this.foodsDetailService.update(id, updateFoodsDetailDto);
    }
    remove(id) {
        return this.foodsDetailService.remove(id);
    }
};
exports.FoodsDetailController = FoodsDetailController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_foods_detail_dto_1.CreateFoodsDetailDto]),
    __metadata("design:returntype", void 0)
], FoodsDetailController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('limit')),
    __param(1, (0, common_1.Query)('skip')),
    __param(2, (0, common_1.Query)('cursor')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", void 0)
], FoodsDetailController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FoodsDetailController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_foods_detail_dto_1.UpdateFoodsDetailDto]),
    __metadata("design:returntype", void 0)
], FoodsDetailController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FoodsDetailController.prototype, "remove", null);
exports.FoodsDetailController = FoodsDetailController = __decorate([
    (0, common_1.Controller)('foods-details'),
    __metadata("design:paramtypes", [foods_detail_service_1.FoodsDetailService])
], FoodsDetailController);
//# sourceMappingURL=foods_detail.controller.js.map