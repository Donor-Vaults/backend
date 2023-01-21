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
exports.FundRaiserUpdateWithoutCreatedByInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const int_field_update_operations_input_1 = require("../prisma/int-field-update-operations.input");
const fund_raiser_updatesupporting_documents_input_1 = require("./fund-raiser-updatesupporting-documents.input");
const enum_status_field_update_operations_input_1 = require("../prisma/enum-status-field-update-operations.input");
const nullable_string_field_update_operations_input_1 = require("../prisma/nullable-string-field-update-operations.input");
let FundRaiserUpdateWithoutCreatedByInput = class FundRaiserUpdateWithoutCreatedByInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], FundRaiserUpdateWithoutCreatedByInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], FundRaiserUpdateWithoutCreatedByInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], FundRaiserUpdateWithoutCreatedByInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], FundRaiserUpdateWithoutCreatedByInput.prototype, "benificiary", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], FundRaiserUpdateWithoutCreatedByInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], FundRaiserUpdateWithoutCreatedByInput.prototype, "featuredImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], FundRaiserUpdateWithoutCreatedByInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], FundRaiserUpdateWithoutCreatedByInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], FundRaiserUpdateWithoutCreatedByInput.prototype, "fundraiserName", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], FundRaiserUpdateWithoutCreatedByInput.prototype, "fundraiserDescription", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_field_update_operations_input_1.IntFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", int_field_update_operations_input_1.IntFieldUpdateOperationsInput)
], FundRaiserUpdateWithoutCreatedByInput.prototype, "goalAmount", void 0);
__decorate([
    (0, graphql_1.Field)(() => fund_raiser_updatesupporting_documents_input_1.FundRaiserUpdatesupportingDocumentsInput, { nullable: true }),
    __metadata("design:type", fund_raiser_updatesupporting_documents_input_1.FundRaiserUpdatesupportingDocumentsInput)
], FundRaiserUpdateWithoutCreatedByInput.prototype, "supportingDocuments", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_status_field_update_operations_input_1.EnumSTATUSFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", enum_status_field_update_operations_input_1.EnumSTATUSFieldUpdateOperationsInput)
], FundRaiserUpdateWithoutCreatedByInput.prototype, "fundraisers_status", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], FundRaiserUpdateWithoutCreatedByInput.prototype, "contract_address", void 0);
FundRaiserUpdateWithoutCreatedByInput = __decorate([
    (0, graphql_2.InputType)()
], FundRaiserUpdateWithoutCreatedByInput);
exports.FundRaiserUpdateWithoutCreatedByInput = FundRaiserUpdateWithoutCreatedByInput;
//# sourceMappingURL=fund-raiser-update-without-created-by.input.js.map