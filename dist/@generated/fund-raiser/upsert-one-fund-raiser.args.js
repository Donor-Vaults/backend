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
exports.UpsertOneFundRaiserArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const fund_raiser_where_unique_input_1 = require("./fund-raiser-where-unique.input");
const class_transformer_1 = require("class-transformer");
const fund_raiser_create_input_1 = require("./fund-raiser-create.input");
const fund_raiser_update_input_1 = require("./fund-raiser-update.input");
let UpsertOneFundRaiserArgs = class UpsertOneFundRaiserArgs {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => fund_raiser_where_unique_input_1.FundRaiserWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => fund_raiser_where_unique_input_1.FundRaiserWhereUniqueInput),
    __metadata("design:type", fund_raiser_where_unique_input_1.FundRaiserWhereUniqueInput)
], UpsertOneFundRaiserArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => fund_raiser_create_input_1.FundRaiserCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => fund_raiser_create_input_1.FundRaiserCreateInput),
    __metadata("design:type", fund_raiser_create_input_1.FundRaiserCreateInput)
], UpsertOneFundRaiserArgs.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => fund_raiser_update_input_1.FundRaiserUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => fund_raiser_update_input_1.FundRaiserUpdateInput),
    __metadata("design:type", fund_raiser_update_input_1.FundRaiserUpdateInput)
], UpsertOneFundRaiserArgs.prototype, "update", void 0);
UpsertOneFundRaiserArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpsertOneFundRaiserArgs);
exports.UpsertOneFundRaiserArgs = UpsertOneFundRaiserArgs;
//# sourceMappingURL=upsert-one-fund-raiser.args.js.map