"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRestaurantRatingDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_restaurant_rating_dto_1 = require("./create-restaurant_rating.dto");
class UpdateRestaurantRatingDto extends (0, mapped_types_1.PartialType)(create_restaurant_rating_dto_1.CreateRestaurantRatingDto) {
}
exports.UpdateRestaurantRatingDto = UpdateRestaurantRatingDto;
//# sourceMappingURL=update-restaurant_rating.dto.js.map