import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { STATUS } from '../prisma/status.enum';
import { FundRaiserCountAggregate } from './fund-raiser-count-aggregate.output';
import { FundRaiserAvgAggregate } from './fund-raiser-avg-aggregate.output';
import { FundRaiserSumAggregate } from './fund-raiser-sum-aggregate.output';
import { FundRaiserMinAggregate } from './fund-raiser-min-aggregate.output';
import { FundRaiserMaxAggregate } from './fund-raiser-max-aggregate.output';

@ObjectType()
export class FundRaiserGroupBy {

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    benificiary!: string;

    @Field(() => String, {nullable:false})
    category!: string;

    @Field(() => String, {nullable:false})
    featuredImage!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => String, {nullable:false})
    fundraiserName!: string;

    @Field(() => String, {nullable:false})
    fundraiserDescription!: string;

    @Field(() => Int, {nullable:false})
    goalAmount!: number;

    @Field(() => [String], {nullable:true})
    supportingDocuments?: Array<string>;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => STATUS, {nullable:false})
    fundraisers_status!: keyof typeof STATUS;

    @Field(() => String, {nullable:true})
    contract_address?: string;

    @Field(() => FundRaiserCountAggregate, {nullable:true})
    _count?: FundRaiserCountAggregate;

    @Field(() => FundRaiserAvgAggregate, {nullable:true})
    _avg?: FundRaiserAvgAggregate;

    @Field(() => FundRaiserSumAggregate, {nullable:true})
    _sum?: FundRaiserSumAggregate;

    @Field(() => FundRaiserMinAggregate, {nullable:true})
    _min?: FundRaiserMinAggregate;

    @Field(() => FundRaiserMaxAggregate, {nullable:true})
    _max?: FundRaiserMaxAggregate;
}
