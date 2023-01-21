import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FundRaiserCreateWithoutCreatedByInput } from './fund-raiser-create-without-created-by.input';
import { Type } from 'class-transformer';
import { FundRaiserCreateOrConnectWithoutCreatedByInput } from './fund-raiser-create-or-connect-without-created-by.input';
import { FundRaiserCreateManyCreatedByInputEnvelope } from './fund-raiser-create-many-created-by-input-envelope.input';
import { FundRaiserWhereUniqueInput } from './fund-raiser-where-unique.input';

@InputType()
export class FundRaiserUncheckedCreateNestedManyWithoutCreatedByInput {

    @Field(() => [FundRaiserCreateWithoutCreatedByInput], {nullable:true})
    @Type(() => FundRaiserCreateWithoutCreatedByInput)
    create?: Array<FundRaiserCreateWithoutCreatedByInput>;

    @Field(() => [FundRaiserCreateOrConnectWithoutCreatedByInput], {nullable:true})
    @Type(() => FundRaiserCreateOrConnectWithoutCreatedByInput)
    connectOrCreate?: Array<FundRaiserCreateOrConnectWithoutCreatedByInput>;

    @Field(() => FundRaiserCreateManyCreatedByInputEnvelope, {nullable:true})
    @Type(() => FundRaiserCreateManyCreatedByInputEnvelope)
    createMany?: FundRaiserCreateManyCreatedByInputEnvelope;

    @Field(() => [FundRaiserWhereUniqueInput], {nullable:true})
    @Type(() => FundRaiserWhereUniqueInput)
    connect?: Array<FundRaiserWhereUniqueInput>;
}
