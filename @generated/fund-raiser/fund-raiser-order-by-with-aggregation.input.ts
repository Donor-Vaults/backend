import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { FundRaiserCountOrderByAggregateInput } from './fund-raiser-count-order-by-aggregate.input';
import { FundRaiserAvgOrderByAggregateInput } from './fund-raiser-avg-order-by-aggregate.input';
import { FundRaiserMaxOrderByAggregateInput } from './fund-raiser-max-order-by-aggregate.input';
import { FundRaiserMinOrderByAggregateInput } from './fund-raiser-min-order-by-aggregate.input';
import { FundRaiserSumOrderByAggregateInput } from './fund-raiser-sum-order-by-aggregate.input';

@InputType()
export class FundRaiserOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    benificiary?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    category?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    featuredImage?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fundraiserName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fundraiserDescription?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    goalAmount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    supportingDocuments?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fundraisers_status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    contract_address?: keyof typeof SortOrder;

    @Field(() => FundRaiserCountOrderByAggregateInput, {nullable:true})
    _count?: FundRaiserCountOrderByAggregateInput;

    @Field(() => FundRaiserAvgOrderByAggregateInput, {nullable:true})
    _avg?: FundRaiserAvgOrderByAggregateInput;

    @Field(() => FundRaiserMaxOrderByAggregateInput, {nullable:true})
    _max?: FundRaiserMaxOrderByAggregateInput;

    @Field(() => FundRaiserMinOrderByAggregateInput, {nullable:true})
    _min?: FundRaiserMinOrderByAggregateInput;

    @Field(() => FundRaiserSumOrderByAggregateInput, {nullable:true})
    _sum?: FundRaiserSumOrderByAggregateInput;
}
