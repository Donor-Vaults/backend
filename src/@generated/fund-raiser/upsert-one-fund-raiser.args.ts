import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FundRaiserWhereUniqueInput } from './fund-raiser-where-unique.input';
import { Type } from 'class-transformer';
import { FundRaiserCreateInput } from './fund-raiser-create.input';
import { FundRaiserUpdateInput } from './fund-raiser-update.input';

@ArgsType()
export class UpsertOneFundRaiserArgs {

    @Field(() => FundRaiserWhereUniqueInput, {nullable:false})
    @Type(() => FundRaiserWhereUniqueInput)
    where!: FundRaiserWhereUniqueInput;

    @Field(() => FundRaiserCreateInput, {nullable:false})
    @Type(() => FundRaiserCreateInput)
    create!: FundRaiserCreateInput;

    @Field(() => FundRaiserUpdateInput, {nullable:false})
    @Type(() => FundRaiserUpdateInput)
    update!: FundRaiserUpdateInput;
}
