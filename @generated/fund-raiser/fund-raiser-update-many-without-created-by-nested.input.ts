import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FundRaiserCreateWithoutCreatedByInput } from './fund-raiser-create-without-created-by.input';
import { Type } from 'class-transformer';
import { FundRaiserCreateOrConnectWithoutCreatedByInput } from './fund-raiser-create-or-connect-without-created-by.input';
import { FundRaiserUpsertWithWhereUniqueWithoutCreatedByInput } from './fund-raiser-upsert-with-where-unique-without-created-by.input';
import { FundRaiserCreateManyCreatedByInputEnvelope } from './fund-raiser-create-many-created-by-input-envelope.input';
import { FundRaiserWhereUniqueInput } from './fund-raiser-where-unique.input';
import { FundRaiserUpdateWithWhereUniqueWithoutCreatedByInput } from './fund-raiser-update-with-where-unique-without-created-by.input';
import { FundRaiserUpdateManyWithWhereWithoutCreatedByInput } from './fund-raiser-update-many-with-where-without-created-by.input';
import { FundRaiserScalarWhereInput } from './fund-raiser-scalar-where.input';

@InputType()
export class FundRaiserUpdateManyWithoutCreatedByNestedInput {

    @Field(() => [FundRaiserCreateWithoutCreatedByInput], {nullable:true})
    @Type(() => FundRaiserCreateWithoutCreatedByInput)
    create?: Array<FundRaiserCreateWithoutCreatedByInput>;

    @Field(() => [FundRaiserCreateOrConnectWithoutCreatedByInput], {nullable:true})
    @Type(() => FundRaiserCreateOrConnectWithoutCreatedByInput)
    connectOrCreate?: Array<FundRaiserCreateOrConnectWithoutCreatedByInput>;

    @Field(() => [FundRaiserUpsertWithWhereUniqueWithoutCreatedByInput], {nullable:true})
    @Type(() => FundRaiserUpsertWithWhereUniqueWithoutCreatedByInput)
    upsert?: Array<FundRaiserUpsertWithWhereUniqueWithoutCreatedByInput>;

    @Field(() => FundRaiserCreateManyCreatedByInputEnvelope, {nullable:true})
    @Type(() => FundRaiserCreateManyCreatedByInputEnvelope)
    createMany?: FundRaiserCreateManyCreatedByInputEnvelope;

    @Field(() => [FundRaiserWhereUniqueInput], {nullable:true})
    @Type(() => FundRaiserWhereUniqueInput)
    set?: Array<FundRaiserWhereUniqueInput>;

    @Field(() => [FundRaiserWhereUniqueInput], {nullable:true})
    @Type(() => FundRaiserWhereUniqueInput)
    disconnect?: Array<FundRaiserWhereUniqueInput>;

    @Field(() => [FundRaiserWhereUniqueInput], {nullable:true})
    @Type(() => FundRaiserWhereUniqueInput)
    delete?: Array<FundRaiserWhereUniqueInput>;

    @Field(() => [FundRaiserWhereUniqueInput], {nullable:true})
    @Type(() => FundRaiserWhereUniqueInput)
    connect?: Array<FundRaiserWhereUniqueInput>;

    @Field(() => [FundRaiserUpdateWithWhereUniqueWithoutCreatedByInput], {nullable:true})
    @Type(() => FundRaiserUpdateWithWhereUniqueWithoutCreatedByInput)
    update?: Array<FundRaiserUpdateWithWhereUniqueWithoutCreatedByInput>;

    @Field(() => [FundRaiserUpdateManyWithWhereWithoutCreatedByInput], {nullable:true})
    @Type(() => FundRaiserUpdateManyWithWhereWithoutCreatedByInput)
    updateMany?: Array<FundRaiserUpdateManyWithWhereWithoutCreatedByInput>;

    @Field(() => [FundRaiserScalarWhereInput], {nullable:true})
    @Type(() => FundRaiserScalarWhereInput)
    deleteMany?: Array<FundRaiserScalarWhereInput>;
}
