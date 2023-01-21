import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FundRaiserWhereInput } from './fund-raiser-where.input';
import { Type } from 'class-transformer';
import { FundRaiserOrderByWithRelationInput } from './fund-raiser-order-by-with-relation.input';
import { FundRaiserWhereUniqueInput } from './fund-raiser-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FundRaiserCountAggregateInput } from './fund-raiser-count-aggregate.input';
import { FundRaiserAvgAggregateInput } from './fund-raiser-avg-aggregate.input';
import { FundRaiserSumAggregateInput } from './fund-raiser-sum-aggregate.input';
import { FundRaiserMinAggregateInput } from './fund-raiser-min-aggregate.input';
import { FundRaiserMaxAggregateInput } from './fund-raiser-max-aggregate.input';

@ArgsType()
export class FundRaiserAggregateArgs {

    @Field(() => FundRaiserWhereInput, {nullable:true})
    @Type(() => FundRaiserWhereInput)
    where?: FundRaiserWhereInput;

    @Field(() => [FundRaiserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FundRaiserOrderByWithRelationInput>;

    @Field(() => FundRaiserWhereUniqueInput, {nullable:true})
    cursor?: FundRaiserWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FundRaiserCountAggregateInput, {nullable:true})
    _count?: FundRaiserCountAggregateInput;

    @Field(() => FundRaiserAvgAggregateInput, {nullable:true})
    _avg?: FundRaiserAvgAggregateInput;

    @Field(() => FundRaiserSumAggregateInput, {nullable:true})
    _sum?: FundRaiserSumAggregateInput;

    @Field(() => FundRaiserMinAggregateInput, {nullable:true})
    _min?: FundRaiserMinAggregateInput;

    @Field(() => FundRaiserMaxAggregateInput, {nullable:true})
    _max?: FundRaiserMaxAggregateInput;
}
