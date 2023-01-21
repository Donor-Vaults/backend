import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateOneFundRaiserArgs } from 'src/@generated/fund-raiser/create-one-fund-raiser.args';
import { User } from 'src/@generated/user/user.model';
import { FundRaiserCreateInput } from './dto/createCampaign.input';
// import { FundRaiserUpdateInput } from './dto/updateCampaign.input';

@Injectable()
export class CampaignsService {
  constructor(private prisma: PrismaService) {}
 
  // async updateCampaign(data: any) {
  //   // return this.prisma.fundRaiser.update({
  //   //   data,
  //   //   where: {
  //   //     id: data.id.toString(),
  //   //   },
  //   // });
  // }

  async createCampaign(user: User, data: CreateOneFundRaiserArgs) {
    
    return this.prisma.fundRaiser.create({
      data: {
        ...data.data,
        userId:user.id
      },
    });
  }
}
