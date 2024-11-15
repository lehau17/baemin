"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodsDetailModule = void 0;
const common_1 = require("@nestjs/common");
const foods_detail_service_1 = require("./foods_detail.service");
const foods_detail_controller_1 = require("./foods_detail.controller");
const prisma_service_1 = require("../prisma/prisma.service");
let FoodsDetailModule = class FoodsDetailModule {
};
exports.FoodsDetailModule = FoodsDetailModule;
exports.FoodsDetailModule = FoodsDetailModule = __decorate([
    (0, common_1.Module)({
        controllers: [foods_detail_controller_1.FoodsDetailController],
        providers: [foods_detail_service_1.FoodsDetailService, prisma_service_1.PrismaService],
    })
], FoodsDetailModule);
//# sourceMappingURL=foods_detail.module.js.map