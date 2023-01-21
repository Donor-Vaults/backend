import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FundRaiserCreatesupportingDocumentsInput } from './fund-raiser-createsupporting-documents.input';
import { STATUS } from '../prisma/status.enum';

@InputType()
export class FundRaiserCreateWithoutCreatedByInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    benificiary!: string;

    @Field(() => String, {nullable:false})
    category!: string;

    @Field(() => String, {nullable:false})
    featuredImage!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => String, {nullable:false})
    fundraiserName!: string;

    @Field(() => String, {nullable:false})
    fundraiserDescription!: string;

    @Field(() => Int, {nullable:false})
    goalAmount!: number;

    @Field(() => FundRaiserCreatesupportingDocumentsInput, {nullable:true})
    supportingDocuments?: FundRaiserCreatesupportingDocumentsInput;

    @Field(() => STATUS, {nullable:true})
    fundraisers_status?: keyof typeof STATUS;

    @Field(() => String, {nullable:true})
    contract_address?: string;
}
