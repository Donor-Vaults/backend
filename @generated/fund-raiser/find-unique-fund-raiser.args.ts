import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FundRaiserWhereUniqueInput } from './fund-raiser-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueFundRaiserArgs {

    @Field(() => FundRaiserWhereUniqueInput, {nullable:false})
    @Type(() => FundRaiserWhereUniqueInput)
    where!: FundRaiserWhereUniqueInput;
}
