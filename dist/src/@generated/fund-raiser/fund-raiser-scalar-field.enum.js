"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FundRaiserScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var FundRaiserScalarFieldEnum;
(function (FundRaiserScalarFieldEnum) {
    FundRaiserScalarFieldEnum["createdAt"] = "createdAt";
    FundRaiserScalarFieldEnum["updatedAt"] = "updatedAt";
    FundRaiserScalarFieldEnum["id"] = "id";
    FundRaiserScalarFieldEnum["benificiary"] = "benificiary";
    FundRaiserScalarFieldEnum["category"] = "category";
    FundRaiserScalarFieldEnum["featuredImage"] = "featuredImage";
    FundRaiserScalarFieldEnum["firstName"] = "firstName";
    FundRaiserScalarFieldEnum["lastName"] = "lastName";
    FundRaiserScalarFieldEnum["fundraiserName"] = "fundraiserName";
    FundRaiserScalarFieldEnum["fundraiserDescription"] = "fundraiserDescription";
    FundRaiserScalarFieldEnum["goalAmount"] = "goalAmount";
    FundRaiserScalarFieldEnum["supportingDocuments"] = "supportingDocuments";
    FundRaiserScalarFieldEnum["userId"] = "userId";
    FundRaiserScalarFieldEnum["fundraisers_status"] = "fundraisers_status";
    FundRaiserScalarFieldEnum["contract_address"] = "contract_address";
})(FundRaiserScalarFieldEnum = exports.FundRaiserScalarFieldEnum || (exports.FundRaiserScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(FundRaiserScalarFieldEnum, { name: 'FundRaiserScalarFieldEnum', description: undefined });
//# sourceMappingURL=fund-raiser-scalar-field.enum.js.map