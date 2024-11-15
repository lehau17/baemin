"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFoodsDetailDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_foods_detail_dto_1 = require("./create-foods_detail.dto");
class UpdateFoodsDetailDto extends (0, mapped_types_1.PartialType)(create_foods_detail_dto_1.CreateFoodsDetailDto) {
}
exports.UpdateFoodsDetailDto = UpdateFoodsDetailDto;
//# sourceMappingURL=update-foods_detail.dto.js.map