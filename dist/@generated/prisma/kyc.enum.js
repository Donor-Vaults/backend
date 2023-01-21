"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KYC = void 0;
const graphql_1 = require("@nestjs/graphql");
var KYC;
(function (KYC) {
    KYC["NOT_INITIALIZED"] = "NOT_INITIALIZED";
    KYC["SUBMITTED"] = "SUBMITTED";
    KYC["ONGOING"] = "ONGOING";
    KYC["REJECTED"] = "REJECTED";
    KYC["APPROVED"] = "APPROVED";
})(KYC = exports.KYC || (exports.KYC = {}));
(0, graphql_1.registerEnumType)(KYC, { name: 'KYCEnum', description: undefined });
//# sourceMappingURL=kyc.enum.js.map