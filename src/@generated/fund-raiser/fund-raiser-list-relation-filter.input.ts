import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FundRaiserWhereInput } from './fund-raiser-where.input';

@InputType()
export class FundRaiserListRelationFilter {

    @Field(() => FundRaiserWhereInput, {nullable:true})
    every?: FundRaiserWhereInput;

    @Field(() => FundRaiserWhereInput, {nullable:true})
    some?: FundRaiserWhereInput;

    @Field(() => FundRaiserWhereInput, {nullable:true})
    none?: FundRaiserWhereInput;
}
