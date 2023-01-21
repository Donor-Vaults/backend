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
exports.FundRaiserAggregateArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const fund_raiser_where_input_1 = require("./fund-raiser-where.input");
const class_transformer_1 = require("class-transformer");
const fund_raiser_order_by_with_relation_input_1 = require("./fund-raiser-order-by-with-relation.input");
const fund_raiser_where_unique_input_1 = require("./fund-raiser-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const fund_raiser_count_aggregate_input_1 = require("./fund-raiser-count-aggregate.input");
const fund_raiser_avg_aggregate_input_1 = require("./fund-raiser-avg-aggregate.input");
const fund_raiser_sum_aggregate_input_1 = require("./fund-raiser-sum-aggregate.input");
const fund_raiser_min_aggregate_input_1 = require("./fund-raiser-min-aggregate.input");
const fund_raiser_max_aggregate_input_1 = require("./fund-raiser-max-aggregate.input");
let FundRaiserAggregateArgs = class FundRaiserAggregateArgs {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => fund_raiser_where_input_1.FundRaiserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => fund_raiser_where_input_1.FundRaiserWhereInput),
    __metadata("design:type", fund_raiser_where_input_1.FundRaiserWhereInput)
], FundRaiserAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [fund_raiser_order_by_with_relation_input_1.FundRaiserOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], FundRaiserAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => fund_raiser_where_unique_input_1.FundRaiserWhereUniqueInput, { nullable: true }),
    __metadata("design:type", fund_raiser_where_unique_input_1.FundRaiserWhereUniqueInput)
], FundRaiserAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FundRaiserAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FundRaiserAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => fund_raiser_count_aggregate_input_1.FundRaiserCountAggregateInput, { nullable: true }),
    __metadata("design:type", fund_raiser_count_aggregate_input_1.FundRaiserCountAggregateInput)
], FundRaiserAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => fund_raiser_avg_aggregate_input_1.FundRaiserAvgAggregateInput, { nullable: true }),
    __metadata("design:type", fund_raiser_avg_aggregate_input_1.FundRaiserAvgAggregateInput)
], FundRaiserAggregateArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => fund_raiser_sum_aggregate_input_1.FundRaiserSumAggregateInput, { nullable: true }),
    __metadata("design:type", fund_raiser_sum_aggregate_input_1.FundRaiserSumAggregateInput)
], FundRaiserAggregateArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => fund_raiser_min_aggregate_input_1.FundRaiserMinAggregateInput, { nullable: true }),
    __metadata("design:type", fund_raiser_min_aggregate_input_1.FundRaiserMinAggregateInput)
], FundRaiserAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => fund_raiser_max_aggregate_input_1.FundRaiserMaxAggregateInput, { nullable: true }),
    __metadata("design:type", fund_raiser_max_aggregate_input_1.FundRaiserMaxAggregateInput)
], FundRaiserAggregateArgs.prototype, "_max", void 0);
FundRaiserAggregateArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FundRaiserAggregateArgs);
exports.FundRaiserAggregateArgs = FundRaiserAggregateArgs;
//# sourceMappingURL=fund-raiser-aggregate.args.js.map