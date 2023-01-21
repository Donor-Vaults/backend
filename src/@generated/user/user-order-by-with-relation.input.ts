import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { FundRaiserOrderByRelationAggregateInput } from '../fund-raiser/fund-raiser-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    mobile_number?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date_of_birth?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    country?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isVerified?: keyof typeof SortOrder;

    @Field(() => FundRaiserOrderByRelationAggregateInput, {nullable:true})
    fundraisers?: FundRaiserOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    kyc_status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    user_role?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    selfie?: keyof typeof SortOrder;
}
