"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFoodRatingDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_food_rating_dto_1 = require("./create-food_rating.dto");
class UpdateFoodRatingDto extends (0, mapped_types_1.PartialType)((0, mapped_types_1.OmitType)(create_food_rating_dto_1.CreateFoodRatingDto, ['food_id'])) {
}
exports.UpdateFoodRatingDto = UpdateFoodRatingDto;
//# sourceMappingURL=update-food_rating.dto.js.map