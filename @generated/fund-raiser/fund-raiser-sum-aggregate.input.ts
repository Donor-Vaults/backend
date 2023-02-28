import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FundRaiserSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    goalAmount?: true;
}
