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
var NestedEnumSTATUSWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumSTATUSWithAggregatesFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const status_enum_1 = require("./status.enum");
const nested_int_filter_input_1 = require("./nested-int-filter.input");
const nested_enum_status_filter_input_1 = require("./nested-enum-status-filter.input");
let NestedEnumSTATUSWithAggregatesFilter = NestedEnumSTATUSWithAggregatesFilter_1 = class NestedEnumSTATUSWithAggregatesFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => status_enum_1.STATUS, { nullable: true }),
    __metadata("design:type", Object)
], NestedEnumSTATUSWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [status_enum_1.STATUS], { nullable: true }),
    __metadata("design:type", Array)
], NestedEnumSTATUSWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [status_enum_1.STATUS], { nullable: true }),
    __metadata("design:type", Array)
], NestedEnumSTATUSWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumSTATUSWithAggregatesFilter_1, { nullable: true }),
    __metadata("design:type", NestedEnumSTATUSWithAggregatesFilter)
], NestedEnumSTATUSWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_int_filter_input_1.NestedIntFilter, { nullable: true }),
    __metadata("design:type", nested_int_filter_input_1.NestedIntFilter)
], NestedEnumSTATUSWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_enum_status_filter_input_1.NestedEnumSTATUSFilter, { nullable: true }),
    __metadata("design:type", nested_enum_status_filter_input_1.NestedEnumSTATUSFilter)
], NestedEnumSTATUSWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_enum_status_filter_input_1.NestedEnumSTATUSFilter, { nullable: true }),
    __metadata("design:type", nested_enum_status_filter_input_1.NestedEnumSTATUSFilter)
], NestedEnumSTATUSWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumSTATUSWithAggregatesFilter = NestedEnumSTATUSWithAggregatesFilter_1 = __decorate([
    (0, graphql_2.InputType)()
], NestedEnumSTATUSWithAggregatesFilter);
exports.NestedEnumSTATUSWithAggregatesFilter = NestedEnumSTATUSWithAggregatesFilter;
//# sourceMappingURL=nested-enum-status-with-aggregates-filter.input.js.map