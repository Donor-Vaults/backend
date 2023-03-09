import {
  Resolver,
  Subscription,
  Query,
  Mutation,
  Args,
  Parent,
  ResolveField,
  Int,
  ObjectType,
  Field,
  Info,
} from '@nestjs/graphql';
import { FundRaiserCreateInput } from './dto/createCampaign.input';
import { PrismaService } from 'nestjs-prisma';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { CampaignsService } from './campaign.service';
import { FundRaiser } from '../@generated/fund-raiser/fund-raiser.model';
import { CreateOneFundRaiserArgs } from '../@generated/fund-raiser/create-one-fund-raiser.args';
import { UserEntity } from '../common/decorators/user.decorator';
import { User } from '../@generated/user/user.model';
import { FundRaiserWhereInput } from '../@generated/fund-raiser/fund-raiser-where.input';
import { GraphQLResolveInfo } from 'graphql';
import { PrismaSelect } from '@paljs/plugins';
import { UpdateOneFundRaiserArgs } from '../@generated/fund-raiser/update-one-fund-raiser.args';

@Resolver(() => FundRaiser)
export class CampaignsResolver {
  constructor(
    private campaignService: CampaignsService,
    private prisma: PrismaService
  ) {}

  
  @UseGuards(GqlAuthGuard)
  @Mutation(() => FundRaiser, { nullable: true })
  async createOneCampaign(
    @Args('') args: CreateOneFundRaiserArgs,
    @UserEntity()
    user: User
  ): Promise<any> {
    if (!user.isVerified) {
      throw new Error("Can't Create Campaign ")
    }
    const campaign = await this.campaignService.createCampaign(user, args);
    return campaign;
  }

  @Query(() => [FundRaiser])
  async fundraisers(
    @Args('where') where: FundRaiserWhereInput,
    @Info() info: GraphQLResolveInfo
  ) {
    const select = new PrismaSelect(info).value;
    // console.log('select', select);
    // return await prisma.user.findMany({ where, ...select });
    const campaigns = await this.prisma.fundRaiser.findMany({
      where,
      ...select,
    });
    return campaigns;
  }


  

  @UseGuards(GqlAuthGuard)
  @Mutation(() => FundRaiser)
  async updateCampaign(
  @UserEntity()
    user: User,
    @Args('') newData: UpdateOneFundRaiserArgs
  ) {

    if (user.user_role !== "ADMIN") {
      throw new Error("Not Allowed")
    }
    return await this.campaignService.updateCampaign(newData.where.id, newData);
  }
}
