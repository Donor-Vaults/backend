import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class FundRaiserCountAggregate {

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    benificiary!: number;

    @Field(() => Int, {nullable:false})
    category!: number;

    @Field(() => Int, {nullable:false})
    featuredImage!: number;

    @Field(() => Int, {nullable:false})
    firstName!: number;

    @Field(() => Int, {nullable:false})
    lastName!: number;

    @Field(() => Int, {nullable:false})
    fundraiserName!: number;

    @Field(() => Int, {nullable:false})
    fundraiserDescription!: number;

    @Field(() => Int, {nullable:false})
    goalAmount!: number;

    @Field(() => Int, {nullable:false})
    supportingDocuments!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    fundraisers_status!: number;

    @Field(() => Int, {nullable:false})
    contract_address!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
