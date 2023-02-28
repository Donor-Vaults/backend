import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FundRaiserAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    goalAmount?: true;
}
