import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FundRaiserCountAggregate } from './fund-raiser-count-aggregate.output';
import { FundRaiserAvgAggregate } from './fund-raiser-avg-aggregate.output';
import { FundRaiserSumAggregate } from './fund-raiser-sum-aggregate.output';
import { FundRaiserMinAggregate } from './fund-raiser-min-aggregate.output';
import { FundRaiserMaxAggregate } from './fund-raiser-max-aggregate.output';

@ObjectType()
export class AggregateFundRaiser {

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
