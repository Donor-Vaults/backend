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
exports.FundRaiserUncheckedUpdateManyWithoutFundraisersInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const int_field_update_operations_input_1 = require("../prisma/int-field-update-operations.input");
const fund_raiser_updatesupporting_documents_input_1 = require("./fund-raiser-updatesupporting-documents.input");
const enum_status_field_update_operations_input_1 = require("../prisma/enum-status-field-update-operations.input");
const nullable_string_field_update_operations_input_1 = require("../prisma/nullable-string-field-update-operations.input");
let FundRaiserUncheckedUpdateManyWithoutFundraisersInput = class FundRaiserUncheckedUpdateManyWithoutFundraisersInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], FundRaiserUncheckedUpdateManyWithoutFundraisersInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], FundRaiserUncheckedUpdateManyWithoutFundraisersInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], FundRaiserUncheckedUpdateManyWithoutFundraisersInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], FundRaiserUncheckedUpdateManyWithoutFundraisersInput.prototype, "benificiary", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], FundRaiserUncheckedUpdateManyWithoutFundraisersInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], FundRaiserUncheckedUpdateManyWithoutFundraisersInput.prototype, "featuredImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], FundRaiserUncheckedUpdateManyWithoutFundraisersInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], FundRaiserUncheckedUpdateManyWithoutFundraisersInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], FundRaiserUncheckedUpdateManyWithoutFundraisersInput.prototype, "fundraiserName", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], FundRaiserUncheckedUpdateManyWithoutFundraisersInput.prototype, "fundraiserDescription", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_field_update_operations_input_1.IntFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", int_field_update_operations_input_1.IntFieldUpdateOperationsInput)
], FundRaiserUncheckedUpdateManyWithoutFundraisersInput.prototype, "goalAmount", void 0);
__decorate([
    (0, graphql_1.Field)(() => fund_raiser_updatesupporting_documents_input_1.FundRaiserUpdatesupportingDocumentsInput, { nullable: true }),
    __metadata("design:type", fund_raiser_updatesupporting_documents_input_1.FundRaiserUpdatesupportingDocumentsInput)
], FundRaiserUncheckedUpdateManyWithoutFundraisersInput.prototype, "supportingDocuments", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_status_field_update_operations_input_1.EnumSTATUSFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", enum_status_field_update_operations_input_1.EnumSTATUSFieldUpdateOperationsInput)
], FundRaiserUncheckedUpdateManyWithoutFundraisersInput.prototype, "fundraisers_status", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], FundRaiserUncheckedUpdateManyWithoutFundraisersInput.prototype, "contract_address", void 0);
FundRaiserUncheckedUpdateManyWithoutFundraisersInput = __decorate([
    (0, graphql_2.InputType)()
], FundRaiserUncheckedUpdateManyWithoutFundraisersInput);
exports.FundRaiserUncheckedUpdateManyWithoutFundraisersInput = FundRaiserUncheckedUpdateManyWithoutFundraisersInput;
//# sourceMappingURL=fund-raiser-unchecked-update-many-without-fundraisers.input.js.map