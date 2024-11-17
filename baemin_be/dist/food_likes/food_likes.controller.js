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
exports.FoodLikesController = void 0;
const common_1 = require("@nestjs/common");
const food_likes_service_1 = require("./food_likes.service");
const create_food_like_dto_1 = require("./dto/create-food_like.dto");
const update_food_like_dto_1 = require("./dto/update-food_like.dto");
const accessToken_guard_1 = require("../common/guard/accessToken.guard");
let FoodLikesController = class FoodLikesController {
    constructor(foodLikesService) {
        this.foodLikesService = foodLikesService;
    }
    create(createFoodLikeDto, req) {
        const { sub } = req.user;
        return this.foodLikesService.create(createFoodLikeDto, sub);
    }
    findAll(limit, skip, cursor) {
        return this.foodLikesService.findAll(limit, skip, cursor);
    }
    findOne(id) {
        return this.foodLikesService.findOne(id);
    }
    update(id, updateFoodLikeDto) {
        return this.foodLikesService.update(id, updateFoodLikeDto);
    }
    remove(id, req) {
        const { sub } = req.user;
        return this.foodLikesService.remove(id, sub);
    }
    toggleLike(id, req) {
        const { sub } = req.user;
        return this.foodLikesService.toggleLike(sub, +id);
    }
    getUserLikedFoods(user_id) {
        return this.foodLikesService.getUserLikedFoods(user_id);
    }
    listUserLiked(id) {
        return this.foodLikesService.listUserLiked(+id);
    }
};
exports.FoodLikesController = FoodLikesController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_food_like_dto_1.CreateFoodLikeDto, Object]),
    __metadata("design:returntype", void 0)
], FoodLikesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('limit')),
    __param(1, (0, common_1.Query)('skip')),
    __param(2, (0, common_1.Query)('cursor')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", void 0)
], FoodLikesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FoodLikesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_food_like_dto_1.UpdateFoodLikeDto]),
    __metadata("design:returntype", void 0)
], FoodLikesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], FoodLikesController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('/food/:id/toggle'),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], FoodLikesController.prototype, "toggleLike", null);
__decorate([
    (0, common_1.Get)('user/:user_id/liked-foods'),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    __param(0, (0, common_1.Param)('user_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FoodLikesController.prototype, "getUserLikedFoods", null);
__decorate([
    (0, common_1.Get)('/food/:id'),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FoodLikesController.prototype, "listUserLiked", null);
exports.FoodLikesController = FoodLikesController = __decorate([
    (0, common_1.Controller)('food-likes'),
    __metadata("design:paramtypes", [food_likes_service_1.FoodLikesService])
], FoodLikesController);
//# sourceMappingURL=food_likes.controller.js.map