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
exports.FoodController = void 0;
const common_1 = require("@nestjs/common");
const food_service_1 = require("./food.service");
const create_food_dto_1 = require("./dto/create-food.dto");
const update_food_dto_1 = require("./dto/update-food.dto");
const accessToken_guard_1 = require("../common/guard/accessToken.guard");
let FoodController = class FoodController {
    constructor(foodService) {
        this.foodService = foodService;
    }
    create(createFoodDto, req) {
        return this.foodService.create(createFoodDto, req.user.id);
    }
    findAll(limit = 20, skip = 0, cursor) {
        return this.foodService.findAll({ limit, skip, cursor });
    }
    searchFood(limit = 20, skip = 0, cursor, name) {
        return this.foodService.findFood({ limit, skip, cursor, name });
    }
    findOne(id) {
        return this.foodService.findOne(id);
    }
    update(id, updateFoodDto) {
        return this.foodService.update(id, updateFoodDto);
    }
    remove(id) {
        return this.foodService.remove(id);
    }
};
exports.FoodController = FoodController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_food_dto_1.CreateFoodDto, Object]),
    __metadata("design:returntype", void 0)
], FoodController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('limit')),
    __param(1, (0, common_1.Query)('skip')),
    __param(2, (0, common_1.Query)('cursor')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Number]),
    __metadata("design:returntype", void 0)
], FoodController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/search'),
    __param(0, (0, common_1.Query)('limit')),
    __param(1, (0, common_1.Query)('skip')),
    __param(2, (0, common_1.Query)('cursor')),
    __param(3, (0, common_1.Query)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Number, String]),
    __metadata("design:returntype", void 0)
], FoodController.prototype, "searchFood", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FoodController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_food_dto_1.UpdateFoodDto]),
    __metadata("design:returntype", void 0)
], FoodController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FoodController.prototype, "remove", null);
exports.FoodController = FoodController = __decorate([
    (0, common_1.Controller)('foods'),
    __metadata("design:paramtypes", [food_service_1.FoodService])
], FoodController);
//# sourceMappingURL=food.controller.js.map