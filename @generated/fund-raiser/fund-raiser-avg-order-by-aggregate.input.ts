import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class FundRaiserAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    goalAmount?: keyof typeof SortOrder;
}
