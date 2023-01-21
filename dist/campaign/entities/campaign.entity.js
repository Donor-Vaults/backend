"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FundRaiser = exports.STATUS = void 0;
const openapi = require("@nestjs/swagger");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
const user_model_1 = require("../../users/models/user.model");
var STATUS;
(function (STATUS) {
    STATUS["NOT_INITILAIZED"] = "NOT_INITILAIZED";
    STATUS["PENDING"] = "PENDING";
    STATUS["APPROVED"] = "APPROVED";
    STATUS["REJECTED"] = "REJECTED";
})(STATUS = exports.STATUS || (exports.STATUS = {}));
(0, graphql_1.registerEnumType)(STATUS, { name: 'STATUS', description: undefined });
let FundRaiser = class FundRaiser {
    static _OPENAPI_METADATA_FACTORY() {
        return { createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date }, id: { required: true, type: () => String }, benificiary: { required: true, type: () => String }, category: { required: true, type: () => String }, featuredImage: { required: true, type: () => String }, firstName: { required: true, type: () => String }, lastName: { required: true, type: () => String }, fundraiserName: { required: true, type: () => String }, fundraiserDescription: { required: true, type: () => String }, goalAmount: { required: true, type: () => Number }, user: { required: false, type: () => require("../../users/models/user.model").User, nullable: true }, status: { required: true, type: () => Object } };
    }
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], FundRaiser.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], FundRaiser.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false }),
    __metadata("design:type", String)
], FundRaiser.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], FundRaiser.prototype, "benificiary", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], FundRaiser.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], FundRaiser.prototype, "featuredImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], FundRaiser.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], FundRaiser.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], FundRaiser.prototype, "fundraiserName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], FundRaiser.prototype, "fundraiserDescription", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false }),
    __metadata("design:type", Number)
], FundRaiser.prototype, "goalAmount", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_model_1.User, { nullable: true }),
    __metadata("design:type", user_model_1.User)
], FundRaiser.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => STATUS, { nullable: false, defaultValue: 'PENDING' }),
    __metadata("design:type", Object)
], FundRaiser.prototype, "status", void 0);
FundRaiser = __decorate([
    (0, graphql_2.ObjectType)()
], FundRaiser);
exports.FundRaiser = FundRaiser;
//# sourceMappingURL=campaign.entity.js.map