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
exports.EnumKYCWithAggregatesFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const kyc_enum_1 = require("./kyc.enum");
const nested_enum_kyc_with_aggregates_filter_input_1 = require("./nested-enum-kyc-with-aggregates-filter.input");
const nested_int_filter_input_1 = require("./nested-int-filter.input");
const nested_enum_kyc_filter_input_1 = require("./nested-enum-kyc-filter.input");
let EnumKYCWithAggregatesFilter = class EnumKYCWithAggregatesFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => kyc_enum_1.KYC, { nullable: true }),
    __metadata("design:type", Object)
], EnumKYCWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [kyc_enum_1.KYC], { nullable: true }),
    __metadata("design:type", Array)
], EnumKYCWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [kyc_enum_1.KYC], { nullable: true }),
    __metadata("design:type", Array)
], EnumKYCWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_enum_kyc_with_aggregates_filter_input_1.NestedEnumKYCWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", nested_enum_kyc_with_aggregates_filter_input_1.NestedEnumKYCWithAggregatesFilter)
], EnumKYCWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_int_filter_input_1.NestedIntFilter, { nullable: true }),
    __metadata("design:type", nested_int_filter_input_1.NestedIntFilter)
], EnumKYCWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_enum_kyc_filter_input_1.NestedEnumKYCFilter, { nullable: true }),
    __metadata("design:type", nested_enum_kyc_filter_input_1.NestedEnumKYCFilter)
], EnumKYCWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_enum_kyc_filter_input_1.NestedEnumKYCFilter, { nullable: true }),
    __metadata("design:type", nested_enum_kyc_filter_input_1.NestedEnumKYCFilter)
], EnumKYCWithAggregatesFilter.prototype, "_max", void 0);
EnumKYCWithAggregatesFilter = __decorate([
    (0, graphql_2.InputType)()
], EnumKYCWithAggregatesFilter);
exports.EnumKYCWithAggregatesFilter = EnumKYCWithAggregatesFilter;
//# sourceMappingURL=enum-kyc-with-aggregates-filter.input.js.map