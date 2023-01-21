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
var FundRaiserWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FundRaiserWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_nullable_list_filter_input_1 = require("../prisma/string-nullable-list-filter.input");
const user_where_input_1 = require("../user/user-where.input");
const enum_status_filter_input_1 = require("../prisma/enum-status-filter.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
let FundRaiserWhereInput = FundRaiserWhereInput_1 = class FundRaiserWhereInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => [FundRaiserWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], FundRaiserWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [FundRaiserWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], FundRaiserWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [FundRaiserWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], FundRaiserWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], FundRaiserWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], FundRaiserWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], FundRaiserWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], FundRaiserWhereInput.prototype, "benificiary", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], FundRaiserWhereInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], FundRaiserWhereInput.prototype, "featuredImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], FundRaiserWhereInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], FundRaiserWhereInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], FundRaiserWhereInput.prototype, "fundraiserName", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], FundRaiserWhereInput.prototype, "fundraiserDescription", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], FundRaiserWhereInput.prototype, "goalAmount", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_list_filter_input_1.StringNullableListFilter, { nullable: true }),
    __metadata("design:type", string_nullable_list_filter_input_1.StringNullableListFilter)
], FundRaiserWhereInput.prototype, "supportingDocuments", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_where_input_1.UserWhereInput, { nullable: true }),
    __metadata("design:type", user_where_input_1.UserWhereInput)
], FundRaiserWhereInput.prototype, "createdBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], FundRaiserWhereInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_status_filter_input_1.EnumSTATUSFilter, { nullable: true }),
    __metadata("design:type", enum_status_filter_input_1.EnumSTATUSFilter)
], FundRaiserWhereInput.prototype, "fundraisers_status", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], FundRaiserWhereInput.prototype, "contract_address", void 0);
FundRaiserWhereInput = FundRaiserWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], FundRaiserWhereInput);
exports.FundRaiserWhereInput = FundRaiserWhereInput;
//# sourceMappingURL=fund-raiser-where.input.js.map