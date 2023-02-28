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
exports.FundRaiserUncheckedCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const fund_raiser_createsupporting_documents_input_1 = require("./fund-raiser-createsupporting-documents.input");
const status_enum_1 = require("../prisma/status.enum");
let FundRaiserUncheckedCreateInput = class FundRaiserUncheckedCreateInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], FundRaiserUncheckedCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], FundRaiserUncheckedCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], FundRaiserUncheckedCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], FundRaiserUncheckedCreateInput.prototype, "benificiary", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], FundRaiserUncheckedCreateInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], FundRaiserUncheckedCreateInput.prototype, "featuredImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], FundRaiserUncheckedCreateInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], FundRaiserUncheckedCreateInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], FundRaiserUncheckedCreateInput.prototype, "fundraiserName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], FundRaiserUncheckedCreateInput.prototype, "fundraiserDescription", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    __metadata("design:type", Number)
], FundRaiserUncheckedCreateInput.prototype, "goalAmount", void 0);
__decorate([
    (0, graphql_1.Field)(() => fund_raiser_createsupporting_documents_input_1.FundRaiserCreatesupportingDocumentsInput, { nullable: true }),
    __metadata("design:type", fund_raiser_createsupporting_documents_input_1.FundRaiserCreatesupportingDocumentsInput)
], FundRaiserUncheckedCreateInput.prototype, "supportingDocuments", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], FundRaiserUncheckedCreateInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => status_enum_1.STATUS, { nullable: true }),
    __metadata("design:type", Object)
], FundRaiserUncheckedCreateInput.prototype, "fundraisers_status", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], FundRaiserUncheckedCreateInput.prototype, "contract_address", void 0);
FundRaiserUncheckedCreateInput = __decorate([
    (0, graphql_2.InputType)()
], FundRaiserUncheckedCreateInput);
exports.FundRaiserUncheckedCreateInput = FundRaiserUncheckedCreateInput;
//# sourceMappingURL=fund-raiser-unchecked-create.input.js.map