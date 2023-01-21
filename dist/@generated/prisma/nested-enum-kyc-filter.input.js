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
var NestedEnumKYCFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumKYCFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const kyc_enum_1 = require("./kyc.enum");
let NestedEnumKYCFilter = NestedEnumKYCFilter_1 = class NestedEnumKYCFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => kyc_enum_1.KYC, { nullable: true }),
    __metadata("design:type", Object)
], NestedEnumKYCFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [kyc_enum_1.KYC], { nullable: true }),
    __metadata("design:type", Array)
], NestedEnumKYCFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [kyc_enum_1.KYC], { nullable: true }),
    __metadata("design:type", Array)
], NestedEnumKYCFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumKYCFilter_1, { nullable: true }),
    __metadata("design:type", NestedEnumKYCFilter)
], NestedEnumKYCFilter.prototype, "not", void 0);
NestedEnumKYCFilter = NestedEnumKYCFilter_1 = __decorate([
    (0, graphql_2.InputType)()
], NestedEnumKYCFilter);
exports.NestedEnumKYCFilter = NestedEnumKYCFilter;
//# sourceMappingURL=nested-enum-kyc-filter.input.js.map