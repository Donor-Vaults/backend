import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FundRaiserWhereInput } from './fund-raiser-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyFundRaiserArgs {

    @Field(() => FundRaiserWhereInput, {nullable:true})
    @Type(() => FundRaiserWhereInput)
    where?: FundRaiserWhereInput;
}
