"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NomineeOrder = exports.NomineeOrderField = void 0;
const eager_import_0 = require("./Nominee-order.input");
const graphql_1 = require("@nestjs/graphql");
const order_1 = require("../../common/order/order");
var NomineeOrderField;
(function (NomineeOrderField) {
    NomineeOrderField["id"] = "id";
    NomineeOrderField["createdAt"] = "createdAt";
    NomineeOrderField["updatedAt"] = "updatedAt";
    NomineeOrderField["published"] = "published";
    NomineeOrderField["name"] = "name";
    NomineeOrderField["relationship"] = "relationship";
})(NomineeOrderField = exports.NomineeOrderField || (exports.NomineeOrderField = {}));
(0, graphql_1.registerEnumType)(NomineeOrderField, {
    name: 'NomineeOrderField',
    description: 'Properties by which Nominee connections can be ordered.',
});
let NomineeOrder = class NomineeOrder extends order_1.Order {
    static _GRAPHQL_METADATA_FACTORY() {
        return { field: { type: () => require("./Nominee-order.input").NomineeOrderField } };
    }
};
NomineeOrder = __decorate([
    (0, graphql_1.InputType)()
], NomineeOrder);
exports.NomineeOrder = NomineeOrder;
//# sourceMappingURL=Nominee-order.input.js.map