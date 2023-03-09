import { EnumSTATUSFieldUpdateOperationsInput } from '@generated/prisma/enum-status-field-update-operations.input';
import { STATUS } from '../@generated/prisma/status.enum';
import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateOneFundRaiserArgs } from '../@generated/fund-raiser/create-one-fund-raiser.args';
import { UpdateOneFundRaiserArgs } from '../@generated/fund-raiser/update-one-fund-raiser.args';
import { User } from '../@generated/user/user.model';
import { FundRaiserCreateInput } from './dto/createCampaign.input';
// import { FundRaiserUpdateInput } from './dto/updateCampaign.input';
import { createTransport } from "nodemailer"

@Injectable()
export class CampaignsService {
  constructor(private prisma: PrismaService) { }
  
  async sendCampaignMail(email: string, isForApproval:boolean) {
    let transporter = createTransport({
      host: 'smtp.titan.email',
      port: 465,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
      }
    })

    const key = `${isForApproval?"Approved":"Rejected"}`
    const subject =  `You Donation Campaign is ${key}- Donor Platfrom`;
    const text =`<html>
    Thank you for creating your fundraising campagin on DONOR platform!<br/>
    Your Campaign Has Been ${key}.

    <br/>
    Best Regards, <br/>
    DONOR Support | noreply@donor.finance
    </html>`


    const message = {
      from: process.env.EMAIL,
      email,
      subject,
      html: text
    }

    await transporter.sendMail(message);
  }

  
 
  async updateCampaign(campaingId:string ,data: UpdateOneFundRaiserArgs) {
    const fundraiser = await this.prisma.fundRaiser.findFirst({ where: { id: campaingId } })
    const user = await this.prisma.user.findFirst({
      where: {
      id:fundraiser.userId
    }})
    const newStatus: any = data.data.fundraisers_status as unknown as STATUS;
    let lastStatus;
    if (fundraiser ) {
      lastStatus = fundraiser.fundraisers_status
    }
    if (newStatus && newStatus !== lastStatus) {
      if (newStatus == STATUS.APPROVED) {
        this.sendCampaignMail(user.email,true);
      } else if (newStatus === STATUS.REJECTED) {
         this.sendCampaignMail(user.email,false);
      }
    }
    
    
    return this.prisma.fundRaiser.update({
      data:data.data,
      where: {
        id: campaingId,
      },
    });
  }

  async createCampaign(user: User, data: CreateOneFundRaiserArgs) {
    
    return this.prisma.fundRaiser.create({
      data: {
        ...data.data,
        userId:user.id
       
      },
    });
  }
}
