import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateOneFundRaiserArgs } from 'src/@generated/fund-raiser/create-one-fund-raiser.args';
import { UpdateOneFundRaiserArgs } from 'src/@generated/fund-raiser/update-one-fund-raiser.args';
import { User } from 'src/@generated/user/user.model';
import { FundRaiserCreateInput } from './dto/createCampaign.input';
// import { FundRaiserUpdateInput } from './dto/updateCampaign.input';

@Injectable()
export class CampaignsService {
  constructor(private prisma: PrismaService) {}
 
  async updateCampaign(campaingId:string ,data: UpdateOneFundRaiserArgs) {
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
