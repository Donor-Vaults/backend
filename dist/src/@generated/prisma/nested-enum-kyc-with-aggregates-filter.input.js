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
var NestedEnumKYCWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumKYCWithAggregatesFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const kyc_enum_1 = require("./kyc.enum");
const nested_int_filter_input_1 = require("./nested-int-filter.input");
const nested_enum_kyc_filter_input_1 = require("./nested-enum-kyc-filter.input");
let NestedEnumKYCWithAggregatesFilter = NestedEnumKYCWithAggregatesFilter_1 = class NestedEnumKYCWithAggregatesFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => kyc_enum_1.KYC, { nullable: true }),
    __metadata("design:type", Object)
], NestedEnumKYCWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [kyc_enum_1.KYC], { nullable: true }),
    __metadata("design:type", Array)
], NestedEnumKYCWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [kyc_enum_1.KYC], { nullable: true }),
    __metadata("design:type", Array)
], NestedEnumKYCWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumKYCWithAggregatesFilter_1, { nullable: true }),
    __metadata("design:type", NestedEnumKYCWithAggregatesFilter)
], NestedEnumKYCWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_int_filter_input_1.NestedIntFilter, { nullable: true }),
    __metadata("design:type", nested_int_filter_input_1.NestedIntFilter)
], NestedEnumKYCWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_enum_kyc_filter_input_1.NestedEnumKYCFilter, { nullable: true }),
    __metadata("design:type", nested_enum_kyc_filter_input_1.NestedEnumKYCFilter)
], NestedEnumKYCWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_enum_kyc_filter_input_1.NestedEnumKYCFilter, { nullable: true }),
    __metadata("design:type", nested_enum_kyc_filter_input_1.NestedEnumKYCFilter)
], NestedEnumKYCWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumKYCWithAggregatesFilter = NestedEnumKYCWithAggregatesFilter_1 = __decorate([
    (0, graphql_2.InputType)()
], NestedEnumKYCWithAggregatesFilter);
exports.NestedEnumKYCWithAggregatesFilter = NestedEnumKYCWithAggregatesFilter;
//# sourceMappingURL=nested-enum-kyc-with-aggregates-filter.input.js.map