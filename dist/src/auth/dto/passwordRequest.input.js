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
exports.PasswordRequestByLinkInput = exports.PasswordRequestInput = void 0;
const graphql_1 = require("@nestjs/graphql");
let PasswordRequestInput = class PasswordRequestInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => String, {}),
    __metadata("design:type", String)
], PasswordRequestInput.prototype, "newPassword", void 0);
PasswordRequestInput = __decorate([
    (0, graphql_1.InputType)()
], PasswordRequestInput);
exports.PasswordRequestInput = PasswordRequestInput;
let PasswordRequestByLinkInput = class PasswordRequestByLinkInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => String, {}),
    __metadata("design:type", String)
], PasswordRequestByLinkInput.prototype, "email", void 0);
PasswordRequestByLinkInput = __decorate([
    (0, graphql_1.InputType)()
], PasswordRequestByLinkInput);
exports.PasswordRequestByLinkInput = PasswordRequestByLinkInput;
//# sourceMappingURL=passwordRequest.input.js.map