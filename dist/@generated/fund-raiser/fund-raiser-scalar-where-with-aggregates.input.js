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
var FundRaiserScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FundRaiserScalarWhereWithAggregatesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const date_time_with_aggregates_filter_input_1 = require("../prisma/date-time-with-aggregates-filter.input");
const string_with_aggregates_filter_input_1 = require("../prisma/string-with-aggregates-filter.input");
const int_with_aggregates_filter_input_1 = require("../prisma/int-with-aggregates-filter.input");
const string_nullable_list_filter_input_1 = require("../prisma/string-nullable-list-filter.input");
const enum_status_with_aggregates_filter_input_1 = require("../prisma/enum-status-with-aggregates-filter.input");
const string_nullable_with_aggregates_filter_input_1 = require("../prisma/string-nullable-with-aggregates-filter.input");
let FundRaiserScalarWhereWithAggregatesInput = FundRaiserScalarWhereWithAggregatesInput_1 = class FundRaiserScalarWhereWithAggregatesInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => [FundRaiserScalarWhereWithAggregatesInput_1], { nullable: true }),
    __metadata("design:type", Array)
], FundRaiserScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [FundRaiserScalarWhereWithAggregatesInput_1], { nullable: true }),
    __metadata("design:type", Array)
], FundRaiserScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [FundRaiserScalarWhereWithAggregatesInput_1], { nullable: true }),
    __metadata("design:type", Array)
], FundRaiserScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter)
], FundRaiserScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter)
], FundRaiserScalarWhereWithAggregatesInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", string_with_aggregates_filter_input_1.StringWithAggregatesFilter)
], FundRaiserScalarWhereWithAggregatesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", string_with_aggregates_filter_input_1.StringWithAggregatesFilter)
], FundRaiserScalarWhereWithAggregatesInput.prototype, "benificiary", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", string_with_aggregates_filter_input_1.StringWithAggregatesFilter)
], FundRaiserScalarWhereWithAggregatesInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", string_with_aggregates_filter_input_1.StringWithAggregatesFilter)
], FundRaiserScalarWhereWithAggregatesInput.prototype, "featuredImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", string_with_aggregates_filter_input_1.StringWithAggregatesFilter)
], FundRaiserScalarWhereWithAggregatesInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", string_with_aggregates_filter_input_1.StringWithAggregatesFilter)
], FundRaiserScalarWhereWithAggregatesInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", string_with_aggregates_filter_input_1.StringWithAggregatesFilter)
], FundRaiserScalarWhereWithAggregatesInput.prototype, "fundraiserName", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", string_with_aggregates_filter_input_1.StringWithAggregatesFilter)
], FundRaiserScalarWhereWithAggregatesInput.prototype, "fundraiserDescription", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_with_aggregates_filter_input_1.IntWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", int_with_aggregates_filter_input_1.IntWithAggregatesFilter)
], FundRaiserScalarWhereWithAggregatesInput.prototype, "goalAmount", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_list_filter_input_1.StringNullableListFilter, { nullable: true }),
    __metadata("design:type", string_nullable_list_filter_input_1.StringNullableListFilter)
], FundRaiserScalarWhereWithAggregatesInput.prototype, "supportingDocuments", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", string_with_aggregates_filter_input_1.StringWithAggregatesFilter)
], FundRaiserScalarWhereWithAggregatesInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_status_with_aggregates_filter_input_1.EnumSTATUSWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", enum_status_with_aggregates_filter_input_1.EnumSTATUSWithAggregatesFilter)
], FundRaiserScalarWhereWithAggregatesInput.prototype, "fundraisers_status", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_with_aggregates_filter_input_1.StringNullableWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", string_nullable_with_aggregates_filter_input_1.StringNullableWithAggregatesFilter)
], FundRaiserScalarWhereWithAggregatesInput.prototype, "contract_address", void 0);
FundRaiserScalarWhereWithAggregatesInput = FundRaiserScalarWhereWithAggregatesInput_1 = __decorate([
    (0, graphql_2.InputType)()
], FundRaiserScalarWhereWithAggregatesInput);
exports.FundRaiserScalarWhereWithAggregatesInput = FundRaiserScalarWhereWithAggregatesInput;
//# sourceMappingURL=fund-raiser-scalar-where-with-aggregates.input.js.map