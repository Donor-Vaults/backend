import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FundRaiserUpdateInput } from './fund-raiser-update.input';
import { Type } from 'class-transformer';
import { FundRaiserWhereUniqueInput } from './fund-raiser-where-unique.input';

@ArgsType()
export class UpdateOneFundRaiserArgs {

    @Field(() => FundRaiserUpdateInput, {nullable:false})
    @Type(() => FundRaiserUpdateInput)
    data!: FundRaiserUpdateInput;

    @Field(() => FundRaiserWhereUniqueInput, {nullable:false})
    @Type(() => FundRaiserWhereUniqueInput)
    where!: FundRaiserWhereUniqueInput;
}
