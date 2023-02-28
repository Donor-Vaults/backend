import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class FundRaiserAvgAggregate {

    @Field(() => Float, {nullable:true})
    goalAmount?: number;
}
