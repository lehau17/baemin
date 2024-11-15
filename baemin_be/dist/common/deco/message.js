"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
const common_1 = require("@nestjs/common");
const Message = (message) => (0, common_1.SetMetadata)('response_message', message);
exports.Message = Message;
//# sourceMappingURL=message.js.map