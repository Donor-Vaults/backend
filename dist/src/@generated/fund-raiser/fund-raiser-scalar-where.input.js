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
var FundRaiserScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FundRaiserScalarWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_nullable_list_filter_input_1 = require("../prisma/string-nullable-list-filter.input");
const enum_status_filter_input_1 = require("../prisma/enum-status-filter.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
let FundRaiserScalarWhereInput = FundRaiserScalarWhereInput_1 = class FundRaiserScalarWhereInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => [FundRaiserScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], FundRaiserScalarWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [FundRaiserScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], FundRaiserScalarWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [FundRaiserScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], FundRaiserScalarWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], FundRaiserScalarWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], FundRaiserScalarWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], FundRaiserScalarWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], FundRaiserScalarWhereInput.prototype, "benificiary", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], FundRaiserScalarWhereInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], FundRaiserScalarWhereInput.prototype, "featuredImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], FundRaiserScalarWhereInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], FundRaiserScalarWhereInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], FundRaiserScalarWhereInput.prototype, "fundraiserName", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], FundRaiserScalarWhereInput.prototype, "fundraiserDescription", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], FundRaiserScalarWhereInput.prototype, "goalAmount", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_list_filter_input_1.StringNullableListFilter, { nullable: true }),
    __metadata("design:type", string_nullable_list_filter_input_1.StringNullableListFilter)
], FundRaiserScalarWhereInput.prototype, "supportingDocuments", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], FundRaiserScalarWhereInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_status_filter_input_1.EnumSTATUSFilter, { nullable: true }),
    __metadata("design:type", enum_status_filter_input_1.EnumSTATUSFilter)
], FundRaiserScalarWhereInput.prototype, "fundraisers_status", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], FundRaiserScalarWhereInput.prototype, "contract_address", void 0);
FundRaiserScalarWhereInput = FundRaiserScalarWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], FundRaiserScalarWhereInput);
exports.FundRaiserScalarWhereInput = FundRaiserScalarWhereInput;
//# sourceMappingURL=fund-raiser-scalar-where.input.js.map