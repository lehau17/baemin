"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFoodLikeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_food_like_dto_1 = require("./create-food_like.dto");
class UpdateFoodLikeDto extends (0, mapped_types_1.PartialType)(create_food_like_dto_1.CreateFoodLikeDto) {
}
exports.UpdateFoodLikeDto = UpdateFoodLikeDto;
//# sourceMappingURL=update-food_like.dto.js.map