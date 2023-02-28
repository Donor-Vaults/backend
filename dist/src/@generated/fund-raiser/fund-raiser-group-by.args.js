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
exports.FundRaiserGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const fund_raiser_where_input_1 = require("./fund-raiser-where.input");
const class_transformer_1 = require("class-transformer");
const fund_raiser_order_by_with_aggregation_input_1 = require("./fund-raiser-order-by-with-aggregation.input");
const fund_raiser_scalar_field_enum_1 = require("./fund-raiser-scalar-field.enum");
const fund_raiser_scalar_where_with_aggregates_input_1 = require("./fund-raiser-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const fund_raiser_count_aggregate_input_1 = require("./fund-raiser-count-aggregate.input");
const fund_raiser_avg_aggregate_input_1 = require("./fund-raiser-avg-aggregate.input");
const fund_raiser_sum_aggregate_input_1 = require("./fund-raiser-sum-aggregate.input");
const fund_raiser_min_aggregate_input_1 = require("./fund-raiser-min-aggregate.input");
const fund_raiser_max_aggregate_input_1 = require("./fund-raiser-max-aggregate.input");
let FundRaiserGroupByArgs = class FundRaiserGroupByArgs {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => fund_raiser_where_input_1.FundRaiserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => fund_raiser_where_input_1.FundRaiserWhereInput),
    __metadata("design:type", fund_raiser_where_input_1.FundRaiserWhereInput)
], FundRaiserGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [fund_raiser_order_by_with_aggregation_input_1.FundRaiserOrderByWithAggregationInput], { nullable: true }),
    __metadata("design:type", Array)
], FundRaiserGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [fund_raiser_scalar_field_enum_1.FundRaiserScalarFieldEnum], { nullable: false }),
    __metadata("design:type", Array)
], FundRaiserGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => fund_raiser_scalar_where_with_aggregates_input_1.FundRaiserScalarWhereWithAggregatesInput, { nullable: true }),
    __metadata("design:type", fund_raiser_scalar_where_with_aggregates_input_1.FundRaiserScalarWhereWithAggregatesInput)
], FundRaiserGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FundRaiserGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FundRaiserGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => fund_raiser_count_aggregate_input_1.FundRaiserCountAggregateInput, { nullable: true }),
    __metadata("design:type", fund_raiser_count_aggregate_input_1.FundRaiserCountAggregateInput)
], FundRaiserGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => fund_raiser_avg_aggregate_input_1.FundRaiserAvgAggregateInput, { nullable: true }),
    __metadata("design:type", fund_raiser_avg_aggregate_input_1.FundRaiserAvgAggregateInput)
], FundRaiserGroupByArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => fund_raiser_sum_aggregate_input_1.FundRaiserSumAggregateInput, { nullable: true }),
    __metadata("design:type", fund_raiser_sum_aggregate_input_1.FundRaiserSumAggregateInput)
], FundRaiserGroupByArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => fund_raiser_min_aggregate_input_1.FundRaiserMinAggregateInput, { nullable: true }),
    __metadata("design:type", fund_raiser_min_aggregate_input_1.FundRaiserMinAggregateInput)
], FundRaiserGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => fund_raiser_max_aggregate_input_1.FundRaiserMaxAggregateInput, { nullable: true }),
    __metadata("design:type", fund_raiser_max_aggregate_input_1.FundRaiserMaxAggregateInput)
], FundRaiserGroupByArgs.prototype, "_max", void 0);
FundRaiserGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FundRaiserGroupByArgs);
exports.FundRaiserGroupByArgs = FundRaiserGroupByArgs;
//# sourceMappingURL=fund-raiser-group-by.args.js.map