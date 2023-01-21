import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FundRaiserUpdateManyMutationInput } from './fund-raiser-update-many-mutation.input';
import { Type } from 'class-transformer';
import { FundRaiserWhereInput } from './fund-raiser-where.input';

@ArgsType()
export class UpdateManyFundRaiserArgs {

    @Field(() => FundRaiserUpdateManyMutationInput, {nullable:false})
    @Type(() => FundRaiserUpdateManyMutationInput)
    data!: FundRaiserUpdateManyMutationInput;

    @Field(() => FundRaiserWhereInput, {nullable:true})
    @Type(() => FundRaiserWhereInput)
    where?: FundRaiserWhereInput;
}
