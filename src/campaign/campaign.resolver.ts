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
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { CampaignsService } from './campaign.service';
import { FundRaiser } from 'src/@generated/fund-raiser/fund-raiser.model';
import { CreateOneFundRaiserArgs } from 'src/@generated/fund-raiser/create-one-fund-raiser.args';
import { UserEntity } from 'src/common/decorators/user.decorator';
import { User } from 'src/@generated/user/user.model';
import { FundRaiserWhereInput } from 'src/@generated/fund-raiser/fund-raiser-where.input';
import { GraphQLResolveInfo } from 'graphql';
import { PrismaSelect } from '@paljs/plugins';

@Resolver(() => FundRaiser)
export class CampaignsResolver {
  constructor(
    private campaignService: CampaignsService,
    private prisma: PrismaService
  ) {}

  // ******************************************************
  // ******************************************************
  // **************Create Documents************************
  // ******************************************************
  // ******************************************************

  // @UseGuards(GqlAuthGuard) // Gql Authentication Guards
  // @Mutation(() => FundRaiser, { nullable: true })
  // async createCampaign(

  //   @Args('')
  //   data: CreateOneFundRaiserArgs
  // ) {
  //   console.log({data})
  //   // await this.campaignService.createCampaign(data);
  //   // return { title: 'papa', url: 'bo' };

  // }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => FundRaiser, { nullable: true })
  async createOneCampaign(
    @Args('') args: CreateOneFundRaiserArgs,
    @UserEntity()
    user: User
  ): Promise<any> {
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

  // @UseGuards(GqlAuthGuard)
  // @Mutation(() => Teqw)
  // async updateCampaign(
  // @UserEntity()
  // user: User,
  //   @Args('data')
  //   data: CreateCampaignInput
  // ) {
  //   // await this.campaignService.updateCampaign(data);
  //   return { title: 'papa', url: 'bo' };
  // }
}