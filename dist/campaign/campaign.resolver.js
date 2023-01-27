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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampaignsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const nestjs_prisma_1 = require("nestjs-prisma");
const common_1 = require("@nestjs/common");
const gql_auth_guard_1 = require("../auth/gql-auth.guard");
const campaign_service_1 = require("./campaign.service");
const fund_raiser_model_1 = require("../@generated/fund-raiser/fund-raiser.model");
const create_one_fund_raiser_args_1 = require("../@generated/fund-raiser/create-one-fund-raiser.args");
const user_decorator_1 = require("../common/decorators/user.decorator");
const user_model_1 = require("../@generated/user/user.model");
const fund_raiser_where_input_1 = require("../@generated/fund-raiser/fund-raiser-where.input");
const plugins_1 = require("@paljs/plugins");
const update_one_fund_raiser_args_1 = require("../@generated/fund-raiser/update-one-fund-raiser.args");
let CampaignsResolver = class CampaignsResolver {
    constructor(campaignService, prisma) {
        this.campaignService = campaignService;
        this.prisma = prisma;
    }
    async createOneCampaign(args, user) {
        const campaign = await this.campaignService.createCampaign(user, args);
        return campaign;
    }
    async fundraisers(where, info) {
        const select = new plugins_1.PrismaSelect(info).value;
        const campaigns = await this.prisma.fundRaiser.findMany(Object.assign({ where }, select));
        return campaigns;
    }
    async updateCampaign(user, newData) {
        if (user.user_role !== "ADMIN") {
            throw new Error("Not Allowed");
        }
        return await this.campaignService.updateCampaign(newData.where.id, newData);
    }
};
__decorate([
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    (0, graphql_1.Mutation)(() => fund_raiser_model_1.FundRaiser, { nullable: true }),
    __param(0, (0, graphql_1.Args)('')),
    __param(1, (0, user_decorator_1.UserEntity)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_one_fund_raiser_args_1.CreateOneFundRaiserArgs,
        user_model_1.User]),
    __metadata("design:returntype", Promise)
], CampaignsResolver.prototype, "createOneCampaign", null);
__decorate([
    (0, graphql_1.Query)(() => [fund_raiser_model_1.FundRaiser]),
    __param(0, (0, graphql_1.Args)('where')),
    __param(1, (0, graphql_1.Info)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [fund_raiser_where_input_1.FundRaiserWhereInput, Object]),
    __metadata("design:returntype", Promise)
], CampaignsResolver.prototype, "fundraisers", null);
__decorate([
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    (0, graphql_1.Mutation)(() => fund_raiser_model_1.FundRaiser),
    __param(0, (0, user_decorator_1.UserEntity)()),
    __param(1, (0, graphql_1.Args)('')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_model_1.User,
        update_one_fund_raiser_args_1.UpdateOneFundRaiserArgs]),
    __metadata("design:returntype", Promise)
], CampaignsResolver.prototype, "updateCampaign", null);
CampaignsResolver = __decorate([
    (0, graphql_1.Resolver)(() => fund_raiser_model_1.FundRaiser),
    __metadata("design:paramtypes", [campaign_service_1.CampaignsService,
        nestjs_prisma_1.PrismaService])
], CampaignsResolver);
exports.CampaignsResolver = CampaignsResolver;
//# sourceMappingURL=campaign.resolver.js.map