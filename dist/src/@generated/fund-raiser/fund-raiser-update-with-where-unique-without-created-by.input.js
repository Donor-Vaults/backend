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
exports.FundRaiserUpdateWithWhereUniqueWithoutCreatedByInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const fund_raiser_where_unique_input_1 = require("./fund-raiser-where-unique.input");
const class_transformer_1 = require("class-transformer");
const fund_raiser_update_without_created_by_input_1 = require("./fund-raiser-update-without-created-by.input");
let FundRaiserUpdateWithWhereUniqueWithoutCreatedByInput = class FundRaiserUpdateWithWhereUniqueWithoutCreatedByInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => fund_raiser_where_unique_input_1.FundRaiserWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => fund_raiser_where_unique_input_1.FundRaiserWhereUniqueInput),
    __metadata("design:type", fund_raiser_where_unique_input_1.FundRaiserWhereUniqueInput)
], FundRaiserUpdateWithWhereUniqueWithoutCreatedByInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => fund_raiser_update_without_created_by_input_1.FundRaiserUpdateWithoutCreatedByInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => fund_raiser_update_without_created_by_input_1.FundRaiserUpdateWithoutCreatedByInput),
    __metadata("design:type", fund_raiser_update_without_created_by_input_1.FundRaiserUpdateWithoutCreatedByInput)
], FundRaiserUpdateWithWhereUniqueWithoutCreatedByInput.prototype, "data", void 0);
FundRaiserUpdateWithWhereUniqueWithoutCreatedByInput = __decorate([
    (0, graphql_2.InputType)()
], FundRaiserUpdateWithWhereUniqueWithoutCreatedByInput);
exports.FundRaiserUpdateWithWhereUniqueWithoutCreatedByInput = FundRaiserUpdateWithWhereUniqueWithoutCreatedByInput;
//# sourceMappingURL=fund-raiser-update-with-where-unique-without-created-by.input.js.map