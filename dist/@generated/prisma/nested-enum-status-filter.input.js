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
var NestedEnumSTATUSFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumSTATUSFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const status_enum_1 = require("./status.enum");
let NestedEnumSTATUSFilter = NestedEnumSTATUSFilter_1 = class NestedEnumSTATUSFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => status_enum_1.STATUS, { nullable: true }),
    __metadata("design:type", Object)
], NestedEnumSTATUSFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [status_enum_1.STATUS], { nullable: true }),
    __metadata("design:type", Array)
], NestedEnumSTATUSFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [status_enum_1.STATUS], { nullable: true }),
    __metadata("design:type", Array)
], NestedEnumSTATUSFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumSTATUSFilter_1, { nullable: true }),
    __metadata("design:type", NestedEnumSTATUSFilter)
], NestedEnumSTATUSFilter.prototype, "not", void 0);
NestedEnumSTATUSFilter = NestedEnumSTATUSFilter_1 = __decorate([
    (0, graphql_2.InputType)()
], NestedEnumSTATUSFilter);
exports.NestedEnumSTATUSFilter = NestedEnumSTATUSFilter;
//# sourceMappingURL=nested-enum-status-filter.input.js.map