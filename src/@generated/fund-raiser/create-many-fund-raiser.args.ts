import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FundRaiserCreateManyInput } from './fund-raiser-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyFundRaiserArgs {

    @Field(() => [FundRaiserCreateManyInput], {nullable:false})
    @Type(() => FundRaiserCreateManyInput)
    data!: Array<FundRaiserCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
