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
exports.UsersService = void 0;
const nestjs_prisma_1 = require("nestjs-prisma");
const common_1 = require("@nestjs/common");
const password_service_1 = require("../auth/password.service");
let UsersService = class UsersService {
    constructor(prisma, passwordService) {
        this.prisma = prisma;
        this.passwordService = passwordService;
    }
    async updateUser(userId, newUserData) {
        console.log({ newUserData });
        const updated_user = this.prisma.user.update({
            data: newUserData.data,
            where: {
                id: userId,
            },
        });
        return updated_user;
    }
    async getUser(userId) {
        const user = await this.prisma.user.findFirst({
            where: { id: userId },
        });
        if (!user) {
            throw new Error("Invalid User");
        }
        const fundraisers = await this.prisma.fundRaiser.findMany({
            where: { userId: user.id },
        });
        const data = Object.assign(Object.assign({}, user), { fundraisers });
        return data;
    }
    async changePassword(changePasswordValue) {
        const hashedPassword = await this.passwordService.hashPassword(changePasswordValue.newPassword);
        try {
            const updated_password = this.prisma.user.update({
                data: {
                    password: hashedPassword,
                },
                where: {},
            });
            return updated_password;
        }
        catch (e) { }
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [nestjs_prisma_1.PrismaService,
        password_service_1.PasswordService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map