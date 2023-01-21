import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FundRaiserWhereUniqueInput } from './fund-raiser-where-unique.input';
import { Type } from 'class-transformer';
import { FundRaiserCreateWithoutCreatedByInput } from './fund-raiser-create-without-created-by.input';

@InputType()
export class FundRaiserCreateOrConnectWithoutCreatedByInput {

    @Field(() => FundRaiserWhereUniqueInput, {nullable:false})
    @Type(() => FundRaiserWhereUniqueInput)
    where!: FundRaiserWhereUniqueInput;

    @Field(() => FundRaiserCreateWithoutCreatedByInput, {nullable:false})
    @Type(() => FundRaiserCreateWithoutCreatedByInput)
    create!: FundRaiserCreateWithoutCreatedByInput;
}
