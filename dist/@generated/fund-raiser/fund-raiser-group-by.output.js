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
exports.FundRaiserGroupBy = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const status_enum_1 = require("../prisma/status.enum");
const fund_raiser_count_aggregate_output_1 = require("./fund-raiser-count-aggregate.output");
const fund_raiser_avg_aggregate_output_1 = require("./fund-raiser-avg-aggregate.output");
const fund_raiser_sum_aggregate_output_1 = require("./fund-raiser-sum-aggregate.output");
const fund_raiser_min_aggregate_output_1 = require("./fund-raiser-min-aggregate.output");
const fund_raiser_max_aggregate_output_1 = require("./fund-raiser-max-aggregate.output");
let FundRaiserGroupBy = class FundRaiserGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], FundRaiserGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], FundRaiserGroupBy.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], FundRaiserGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], FundRaiserGroupBy.prototype, "benificiary", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], FundRaiserGroupBy.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], FundRaiserGroupBy.prototype, "featuredImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], FundRaiserGroupBy.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], FundRaiserGroupBy.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], FundRaiserGroupBy.prototype, "fundraiserName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], FundRaiserGroupBy.prototype, "fundraiserDescription", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    __metadata("design:type", Number)
], FundRaiserGroupBy.prototype, "goalAmount", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], FundRaiserGroupBy.prototype, "supportingDocuments", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], FundRaiserGroupBy.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => status_enum_1.STATUS, { nullable: false }),
    __metadata("design:type", Object)
], FundRaiserGroupBy.prototype, "fundraisers_status", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], FundRaiserGroupBy.prototype, "contract_address", void 0);
__decorate([
    (0, graphql_1.Field)(() => fund_raiser_count_aggregate_output_1.FundRaiserCountAggregate, { nullable: true }),
    __metadata("design:type", fund_raiser_count_aggregate_output_1.FundRaiserCountAggregate)
], FundRaiserGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => fund_raiser_avg_aggregate_output_1.FundRaiserAvgAggregate, { nullable: true }),
    __metadata("design:type", fund_raiser_avg_aggregate_output_1.FundRaiserAvgAggregate)
], FundRaiserGroupBy.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => fund_raiser_sum_aggregate_output_1.FundRaiserSumAggregate, { nullable: true }),
    __metadata("design:type", fund_raiser_sum_aggregate_output_1.FundRaiserSumAggregate)
], FundRaiserGroupBy.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => fund_raiser_min_aggregate_output_1.FundRaiserMinAggregate, { nullable: true }),
    __metadata("design:type", fund_raiser_min_aggregate_output_1.FundRaiserMinAggregate)
], FundRaiserGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => fund_raiser_max_aggregate_output_1.FundRaiserMaxAggregate, { nullable: true }),
    __metadata("design:type", fund_raiser_max_aggregate_output_1.FundRaiserMaxAggregate)
], FundRaiserGroupBy.prototype, "_max", void 0);
FundRaiserGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], FundRaiserGroupBy);
exports.FundRaiserGroupBy = FundRaiserGroupBy;
//# sourceMappingURL=fund-raiser-group-by.output.js.map