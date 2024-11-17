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
exports.FoodRatingsController = void 0;
const common_1 = require("@nestjs/common");
const food_ratings_service_1 = require("./food_ratings.service");
const create_food_rating_dto_1 = require("./dto/create-food_rating.dto");
const update_food_rating_dto_1 = require("./dto/update-food_rating.dto");
const accessToken_guard_1 = require("../common/guard/accessToken.guard");
const paging_dto_1 = require("../common/paging/paging.dto");
const message_1 = require("../common/deco/message");
let FoodRatingsController = class FoodRatingsController {
    constructor(foodRatingsService) {
        this.foodRatingsService = foodRatingsService;
    }
    create(createFoodRatingDto, req) {
        const { sub } = req.user;
        return this.foodRatingsService.create(createFoodRatingDto, sub);
    }
    findAll(limit, skip, cursor) {
        return this.foodRatingsService.findAll(limit, skip, cursor);
    }
    findOne(id) {
        return this.foodRatingsService.findOne(id);
    }
    update(id, updateFoodRatingDto, req) {
        const { sub } = req.user;
        return this.foodRatingsService.update(id, updateFoodRatingDto, sub);
    }
    remove(id, req) {
        const { sub } = req.user;
        return this.foodRatingsService.remove(id, sub);
    }
    rateFood({ food_id, food_rate_point, food_rate_comment, }, req) {
        const { sub } = req.user;
        return this.foodRatingsService.rateFood(sub, food_id, food_rate_point, food_rate_comment);
    }
    getAverageRating(food_id) {
        return this.foodRatingsService.getAverageRating(food_id);
    }
    getUserRatings(user_id, { cursor, limit = 20, skip = 0 }) {
        return this.foodRatingsService.getUserRatings(user_id, { limit, skip, cursor });
    }
    getRatingOfMe({ cursor, limit = 20, skip = 0 }, req) {
        const { sub } = req.user;
        return this.foodRatingsService.getUserRatings(sub, { limit, skip, cursor });
    }
    getFoodRatings(food_id) {
        return this.foodRatingsService.getFoodRatings(food_id);
    }
};
exports.FoodRatingsController = FoodRatingsController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, message_1.Message)("Added food ratings"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_food_rating_dto_1.CreateFoodRatingDto, Object]),
    __metadata("design:returntype", void 0)
], FoodRatingsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('limit')),
    __param(1, (0, common_1.Query)('skip')),
    __param(2, (0, common_1.Query)('cursor')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", void 0)
], FoodRatingsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FoodRatingsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_food_rating_dto_1.UpdateFoodRatingDto, Object]),
    __metadata("design:returntype", void 0)
], FoodRatingsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], FoodRatingsController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('rate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_food_rating_dto_1.CreateFoodRatingDto, Object]),
    __metadata("design:returntype", void 0)
], FoodRatingsController.prototype, "rateFood", null);
__decorate([
    (0, common_1.Get)('food/:food_id/average'),
    __param(0, (0, common_1.Param)('food_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FoodRatingsController.prototype, "getAverageRating", null);
__decorate([
    (0, common_1.Get)('user/:user_id/ratings'),
    __param(0, (0, common_1.Param)('user_id')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, paging_dto_1.PaginationDto]),
    __metadata("design:returntype", void 0)
], FoodRatingsController.prototype, "getUserRatings", null);
__decorate([
    (0, common_1.Get)('/me/list'),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [paging_dto_1.PaginationDto, Object]),
    __metadata("design:returntype", void 0)
], FoodRatingsController.prototype, "getRatingOfMe", null);
__decorate([
    (0, common_1.Get)('food/:food_id/ratings'),
    __param(0, (0, common_1.Param)('food_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FoodRatingsController.prototype, "getFoodRatings", null);
exports.FoodRatingsController = FoodRatingsController = __decorate([
    (0, common_1.Controller)('food-ratings'),
    __metadata("design:paramtypes", [food_ratings_service_1.FoodRatingsService])
], FoodRatingsController);
//# sourceMappingURL=food_ratings.controller.js.map