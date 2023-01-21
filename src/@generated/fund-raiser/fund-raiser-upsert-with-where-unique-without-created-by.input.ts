import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FundRaiserWhereUniqueInput } from './fund-raiser-where-unique.input';
import { Type } from 'class-transformer';
import { FundRaiserUpdateWithoutCreatedByInput } from './fund-raiser-update-without-created-by.input';
import { FundRaiserCreateWithoutCreatedByInput } from './fund-raiser-create-without-created-by.input';

@InputType()
export class FundRaiserUpsertWithWhereUniqueWithoutCreatedByInput {

    @Field(() => FundRaiserWhereUniqueInput, {nullable:false})
    @Type(() => FundRaiserWhereUniqueInput)
    where!: FundRaiserWhereUniqueInput;

    @Field(() => FundRaiserUpdateWithoutCreatedByInput, {nullable:false})
    @Type(() => FundRaiserUpdateWithoutCreatedByInput)
    update!: FundRaiserUpdateWithoutCreatedByInput;

    @Field(() => FundRaiserCreateWithoutCreatedByInput, {nullable:false})
    @Type(() => FundRaiserCreateWithoutCreatedByInput)
    create!: FundRaiserCreateWithoutCreatedByInput;
}
