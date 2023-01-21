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
exports.FundRaiserOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const fund_raiser_count_order_by_aggregate_input_1 = require("./fund-raiser-count-order-by-aggregate.input");
const fund_raiser_avg_order_by_aggregate_input_1 = require("./fund-raiser-avg-order-by-aggregate.input");
const fund_raiser_max_order_by_aggregate_input_1 = require("./fund-raiser-max-order-by-aggregate.input");
const fund_raiser_min_order_by_aggregate_input_1 = require("./fund-raiser-min-order-by-aggregate.input");
const fund_raiser_sum_order_by_aggregate_input_1 = require("./fund-raiser-sum-order-by-aggregate.input");
let FundRaiserOrderByWithAggregationInput = class FundRaiserOrderByWithAggregationInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], FundRaiserOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], FundRaiserOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], FundRaiserOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], FundRaiserOrderByWithAggregationInput.prototype, "benificiary", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], FundRaiserOrderByWithAggregationInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], FundRaiserOrderByWithAggregationInput.prototype, "featuredImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], FundRaiserOrderByWithAggregationInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], FundRaiserOrderByWithAggregationInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], FundRaiserOrderByWithAggregationInput.prototype, "fundraiserName", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], FundRaiserOrderByWithAggregationInput.prototype, "fundraiserDescription", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], FundRaiserOrderByWithAggregationInput.prototype, "goalAmount", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], FundRaiserOrderByWithAggregationInput.prototype, "supportingDocuments", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], FundRaiserOrderByWithAggregationInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], FundRaiserOrderByWithAggregationInput.prototype, "fundraisers_status", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], FundRaiserOrderByWithAggregationInput.prototype, "contract_address", void 0);
__decorate([
    (0, graphql_1.Field)(() => fund_raiser_count_order_by_aggregate_input_1.FundRaiserCountOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", fund_raiser_count_order_by_aggregate_input_1.FundRaiserCountOrderByAggregateInput)
], FundRaiserOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => fund_raiser_avg_order_by_aggregate_input_1.FundRaiserAvgOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", fund_raiser_avg_order_by_aggregate_input_1.FundRaiserAvgOrderByAggregateInput)
], FundRaiserOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => fund_raiser_max_order_by_aggregate_input_1.FundRaiserMaxOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", fund_raiser_max_order_by_aggregate_input_1.FundRaiserMaxOrderByAggregateInput)
], FundRaiserOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => fund_raiser_min_order_by_aggregate_input_1.FundRaiserMinOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", fund_raiser_min_order_by_aggregate_input_1.FundRaiserMinOrderByAggregateInput)
], FundRaiserOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => fund_raiser_sum_order_by_aggregate_input_1.FundRaiserSumOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", fund_raiser_sum_order_by_aggregate_input_1.FundRaiserSumOrderByAggregateInput)
], FundRaiserOrderByWithAggregationInput.prototype, "_sum", void 0);
FundRaiserOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], FundRaiserOrderByWithAggregationInput);
exports.FundRaiserOrderByWithAggregationInput = FundRaiserOrderByWithAggregationInput;
//# sourceMappingURL=fund-raiser-order-by-with-aggregation.input.js.map