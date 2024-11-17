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
exports.RestaurantRatingController = void 0;
const common_1 = require("@nestjs/common");
const restaurant_rating_service_1 = require("./restaurant_rating.service");
const create_restaurant_rating_dto_1 = require("./dto/create-restaurant_rating.dto");
const update_restaurant_rating_dto_1 = require("./dto/update-restaurant_rating.dto");
const accessToken_guard_1 = require("../common/guard/accessToken.guard");
const message_1 = require("../common/deco/message");
let RestaurantRatingController = class RestaurantRatingController {
    constructor(restaurantRatingService) {
        this.restaurantRatingService = restaurantRatingService;
    }
    create(createRestaurantRatingDto, req) {
        const { sub } = req.user;
        return this.restaurantRatingService.create(createRestaurantRatingDto, sub);
    }
    findAll(limit = 20, skip = 0, cursor) {
        return this.restaurantRatingService.findAll({ limit, skip, cursor });
    }
    findAllByRes(id, limit = 20, skip = 0, cursor) {
        return this.restaurantRatingService.findAllByRes({
            limit,
            skip,
            cursor,
            id: +id
        });
    }
    findOne(id) {
        return this.restaurantRatingService.findOne(id);
    }
    update(id, req, updateRestaurantRatingDto) {
        const { sub } = req.user;
        return this.restaurantRatingService.update(id, updateRestaurantRatingDto, sub);
    }
    remove(id, req) {
        const { sub } = req.user;
        return this.restaurantRatingService.remove(id, sub);
    }
    getRestaurantAverageRating(res_id) {
        return this.restaurantRatingService.getRestaurantAverageRating(res_id);
    }
    getUserRatings(user_id) {
        return this.restaurantRatingService.getUserRatings(user_id);
    }
};
exports.RestaurantRatingController = RestaurantRatingController;
__decorate([
    (0, common_1.Post)(),
    (0, message_1.Message)("created restaurant rating"),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_restaurant_rating_dto_1.CreateRestaurantRatingDto, Object]),
    __metadata("design:returntype", void 0)
], RestaurantRatingController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('limit')),
    __param(1, (0, common_1.Query)('skip')),
    __param(2, (0, common_1.Query)('cursor')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Number]),
    __metadata("design:returntype", void 0)
], RestaurantRatingController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)("/res/:id"),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('skip')),
    __param(3, (0, common_1.Query)('cursor')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object, Number]),
    __metadata("design:returntype", void 0)
], RestaurantRatingController.prototype, "findAllByRes", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RestaurantRatingController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, update_restaurant_rating_dto_1.UpdateRestaurantRatingDto]),
    __metadata("design:returntype", void 0)
], RestaurantRatingController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], RestaurantRatingController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('restaurant/:res_id/average-rating'),
    __param(0, (0, common_1.Param)('res_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RestaurantRatingController.prototype, "getRestaurantAverageRating", null);
__decorate([
    (0, common_1.Get)('user/:user_id/ratings'),
    __param(0, (0, common_1.Param)('user_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RestaurantRatingController.prototype, "getUserRatings", null);
exports.RestaurantRatingController = RestaurantRatingController = __decorate([
    (0, common_1.Controller)('restaurant-ratings'),
    __metadata("design:paramtypes", [restaurant_rating_service_1.RestaurantRatingService])
], RestaurantRatingController);
//# sourceMappingURL=restaurant_rating.controller.js.map