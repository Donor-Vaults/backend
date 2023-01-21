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
exports.FundRaiserUpdateManyWithoutCreatedByNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const fund_raiser_create_without_created_by_input_1 = require("./fund-raiser-create-without-created-by.input");
const class_transformer_1 = require("class-transformer");
const fund_raiser_create_or_connect_without_created_by_input_1 = require("./fund-raiser-create-or-connect-without-created-by.input");
const fund_raiser_upsert_with_where_unique_without_created_by_input_1 = require("./fund-raiser-upsert-with-where-unique-without-created-by.input");
const fund_raiser_create_many_created_by_input_envelope_input_1 = require("./fund-raiser-create-many-created-by-input-envelope.input");
const fund_raiser_where_unique_input_1 = require("./fund-raiser-where-unique.input");
const fund_raiser_update_with_where_unique_without_created_by_input_1 = require("./fund-raiser-update-with-where-unique-without-created-by.input");
const fund_raiser_update_many_with_where_without_created_by_input_1 = require("./fund-raiser-update-many-with-where-without-created-by.input");
const fund_raiser_scalar_where_input_1 = require("./fund-raiser-scalar-where.input");
let FundRaiserUpdateManyWithoutCreatedByNestedInput = class FundRaiserUpdateManyWithoutCreatedByNestedInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => [fund_raiser_create_without_created_by_input_1.FundRaiserCreateWithoutCreatedByInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => fund_raiser_create_without_created_by_input_1.FundRaiserCreateWithoutCreatedByInput),
    __metadata("design:type", Array)
], FundRaiserUpdateManyWithoutCreatedByNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [fund_raiser_create_or_connect_without_created_by_input_1.FundRaiserCreateOrConnectWithoutCreatedByInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => fund_raiser_create_or_connect_without_created_by_input_1.FundRaiserCreateOrConnectWithoutCreatedByInput),
    __metadata("design:type", Array)
], FundRaiserUpdateManyWithoutCreatedByNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [fund_raiser_upsert_with_where_unique_without_created_by_input_1.FundRaiserUpsertWithWhereUniqueWithoutCreatedByInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => fund_raiser_upsert_with_where_unique_without_created_by_input_1.FundRaiserUpsertWithWhereUniqueWithoutCreatedByInput),
    __metadata("design:type", Array)
], FundRaiserUpdateManyWithoutCreatedByNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => fund_raiser_create_many_created_by_input_envelope_input_1.FundRaiserCreateManyCreatedByInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => fund_raiser_create_many_created_by_input_envelope_input_1.FundRaiserCreateManyCreatedByInputEnvelope),
    __metadata("design:type", fund_raiser_create_many_created_by_input_envelope_input_1.FundRaiserCreateManyCreatedByInputEnvelope)
], FundRaiserUpdateManyWithoutCreatedByNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [fund_raiser_where_unique_input_1.FundRaiserWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => fund_raiser_where_unique_input_1.FundRaiserWhereUniqueInput),
    __metadata("design:type", Array)
], FundRaiserUpdateManyWithoutCreatedByNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [fund_raiser_where_unique_input_1.FundRaiserWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => fund_raiser_where_unique_input_1.FundRaiserWhereUniqueInput),
    __metadata("design:type", Array)
], FundRaiserUpdateManyWithoutCreatedByNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [fund_raiser_where_unique_input_1.FundRaiserWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => fund_raiser_where_unique_input_1.FundRaiserWhereUniqueInput),
    __metadata("design:type", Array)
], FundRaiserUpdateManyWithoutCreatedByNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [fund_raiser_where_unique_input_1.FundRaiserWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => fund_raiser_where_unique_input_1.FundRaiserWhereUniqueInput),
    __metadata("design:type", Array)
], FundRaiserUpdateManyWithoutCreatedByNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [fund_raiser_update_with_where_unique_without_created_by_input_1.FundRaiserUpdateWithWhereUniqueWithoutCreatedByInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => fund_raiser_update_with_where_unique_without_created_by_input_1.FundRaiserUpdateWithWhereUniqueWithoutCreatedByInput),
    __metadata("design:type", Array)
], FundRaiserUpdateManyWithoutCreatedByNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [fund_raiser_update_many_with_where_without_created_by_input_1.FundRaiserUpdateManyWithWhereWithoutCreatedByInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => fund_raiser_update_many_with_where_without_created_by_input_1.FundRaiserUpdateManyWithWhereWithoutCreatedByInput),
    __metadata("design:type", Array)
], FundRaiserUpdateManyWithoutCreatedByNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [fund_raiser_scalar_where_input_1.FundRaiserScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => fund_raiser_scalar_where_input_1.FundRaiserScalarWhereInput),
    __metadata("design:type", Array)
], FundRaiserUpdateManyWithoutCreatedByNestedInput.prototype, "deleteMany", void 0);
FundRaiserUpdateManyWithoutCreatedByNestedInput = __decorate([
    (0, graphql_2.InputType)()
], FundRaiserUpdateManyWithoutCreatedByNestedInput);
exports.FundRaiserUpdateManyWithoutCreatedByNestedInput = FundRaiserUpdateManyWithoutCreatedByNestedInput;
//# sourceMappingURL=fund-raiser-update-many-without-created-by-nested.input.js.map