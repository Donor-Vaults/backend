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
exports.CampaignsService = void 0;
const status_enum_1 = require("../@generated/prisma/status.enum");
const common_1 = require("@nestjs/common");
const nestjs_prisma_1 = require("nestjs-prisma");
const nodemailer_1 = require("nodemailer");
let CampaignsService = class CampaignsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async sendCampaignMail(to, isForApproval) {
        let transporter = (0, nodemailer_1.createTransport)({
            host: 'smtp.titan.email',
            port: 465,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD
            }
        });
        const key = `${isForApproval ? "Approved" : "Rejected"}`;
        const subject = `You Donation Campaign is ${key}- Donor Platfrom`;
        const text = `<html>
    Thank you for creating your fundraising campagin on DONOR platform!<br/>
    Your Campaign Has Been ${key}.

    <br/>
    Best Regards, <br/>
    DONOR Support | noreply@donor.finance
    </html>`;
        const message = {
            from: process.env.EMAIL,
            to,
            subject,
            html: text
        };
        await transporter.sendMail(message);
    }
    async updateCampaign(campaingId, data) {
        const fundraiser = await this.prisma.fundRaiser.findFirst({ where: { id: campaingId } });
        const user = await this.prisma.user.findFirst({
            where: {
                id: fundraiser.userId
            }
        });
        let lastStatus;
        if (fundraiser) {
            lastStatus = fundraiser.fundraisers_status;
        }
        const newFundaraiser = await this.prisma.fundRaiser.update({
            data: data.data,
            where: {
                id: campaingId,
            },
        });
        const newStatus = newFundaraiser.fundraisers_status;
        if (newStatus && newStatus !== lastStatus) {
            if (newStatus == status_enum_1.STATUS.APPROVED) {
                this.sendCampaignMail(user.email, true);
            }
            else if (newStatus === status_enum_1.STATUS.REJECTED) {
                this.sendCampaignMail(user.email, false);
            }
        }
        return newFundaraiser;
    }
    async createCampaign(user, data) {
        return this.prisma.fundRaiser.create({
            data: Object.assign(Object.assign({}, data.data), { userId: user.id }),
        });
    }
};
CampaignsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [nestjs_prisma_1.PrismaService])
], CampaignsService);
exports.CampaignsService = CampaignsService;
//# sourceMappingURL=campaign.service.js.map