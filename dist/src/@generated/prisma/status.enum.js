"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STATUS = void 0;
const graphql_1 = require("@nestjs/graphql");
var STATUS;
(function (STATUS) {
    STATUS["NOT_INITILAIZED"] = "NOT_INITILAIZED";
    STATUS["PENDING"] = "PENDING";
    STATUS["APPROVED"] = "APPROVED";
    STATUS["REJECTED"] = "REJECTED";
})(STATUS = exports.STATUS || (exports.STATUS = {}));
(0, graphql_1.registerEnumType)(STATUS, { name: 'STATUS', description: undefined });
//# sourceMappingURL=status.enum.js.map