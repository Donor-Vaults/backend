import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FundRaiserScalarWhereInput } from './fund-raiser-scalar-where.input';
import { Type } from 'class-transformer';
import { FundRaiserUpdateManyMutationInput } from './fund-raiser-update-many-mutation.input';

@InputType()
export class FundRaiserUpdateManyWithWhereWithoutCreatedByInput {

    @Field(() => FundRaiserScalarWhereInput, {nullable:false})
    @Type(() => FundRaiserScalarWhereInput)
    where!: FundRaiserScalarWhereInput;

    @Field(() => FundRaiserUpdateManyMutationInput, {nullable:false})
    @Type(() => FundRaiserUpdateManyMutationInput)
    data!: FundRaiserUpdateManyMutationInput;
}
