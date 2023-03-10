"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var UserScalarFieldEnum;
(function (UserScalarFieldEnum) {
    UserScalarFieldEnum["id"] = "id";
    UserScalarFieldEnum["createdAt"] = "createdAt";
    UserScalarFieldEnum["updatedAt"] = "updatedAt";
    UserScalarFieldEnum["email"] = "email";
    UserScalarFieldEnum["name"] = "name";
    UserScalarFieldEnum["mobile_number"] = "mobile_number";
    UserScalarFieldEnum["date_of_birth"] = "date_of_birth";
    UserScalarFieldEnum["country"] = "country";
    UserScalarFieldEnum["password"] = "password";
    UserScalarFieldEnum["isVerified"] = "isVerified";
    UserScalarFieldEnum["kyc_status"] = "kyc_status";
    UserScalarFieldEnum["user_role"] = "user_role";
    UserScalarFieldEnum["selfie"] = "selfie";
})(UserScalarFieldEnum = exports.UserScalarFieldEnum || (exports.UserScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined });
//# sourceMappingURL=user-scalar-field.enum.js.map