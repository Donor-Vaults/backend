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
exports.AggregateFundRaiser = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const fund_raiser_count_aggregate_output_1 = require("./fund-raiser-count-aggregate.output");
const fund_raiser_avg_aggregate_output_1 = require("./fund-raiser-avg-aggregate.output");
const fund_raiser_sum_aggregate_output_1 = require("./fund-raiser-sum-aggregate.output");
const fund_raiser_min_aggregate_output_1 = require("./fund-raiser-min-aggregate.output");
const fund_raiser_max_aggregate_output_1 = require("./fund-raiser-max-aggregate.output");
let AggregateFundRaiser = class AggregateFundRaiser {
};
__decorate([
    (0, graphql_1.Field)(() => fund_raiser_count_aggregate_output_1.FundRaiserCountAggregate, { nullable: true }),
    __metadata("design:type", fund_raiser_count_aggregate_output_1.FundRaiserCountAggregate)
], AggregateFundRaiser.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => fund_raiser_avg_aggregate_output_1.FundRaiserAvgAggregate, { nullable: true }),
    __metadata("design:type", fund_raiser_avg_aggregate_output_1.FundRaiserAvgAggregate)
], AggregateFundRaiser.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => fund_raiser_sum_aggregate_output_1.FundRaiserSumAggregate, { nullable: true }),
    __metadata("design:type", fund_raiser_sum_aggregate_output_1.FundRaiserSumAggregate)
], AggregateFundRaiser.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => fund_raiser_min_aggregate_output_1.FundRaiserMinAggregate, { nullable: true }),
    __metadata("design:type", fund_raiser_min_aggregate_output_1.FundRaiserMinAggregate)
], AggregateFundRaiser.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => fund_raiser_max_aggregate_output_1.FundRaiserMaxAggregate, { nullable: true }),
    __metadata("design:type", fund_raiser_max_aggregate_output_1.FundRaiserMaxAggregate)
], AggregateFundRaiser.prototype, "_max", void 0);
AggregateFundRaiser = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateFundRaiser);
exports.AggregateFundRaiser = AggregateFundRaiser;
//# sourceMappingURL=aggregate-fund-raiser.output.js.map