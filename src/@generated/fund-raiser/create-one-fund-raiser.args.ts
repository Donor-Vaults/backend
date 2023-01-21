import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FundRaiserCreateInput } from './fund-raiser-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneFundRaiserArgs {

    @Field(() => FundRaiserCreateInput, {nullable:false})
    @Type(() => FundRaiserCreateInput)
    data!: FundRaiserCreateInput;
}
