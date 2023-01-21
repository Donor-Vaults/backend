import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    email!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    mobile_number!: number;

    @Field(() => Int, {nullable:false})
    date_of_birth!: number;

    @Field(() => Int, {nullable:false})
    country!: number;

    @Field(() => Int, {nullable:false})
    password!: number;

    @Field(() => Int, {nullable:false})
    isVerified!: number;

    @Field(() => Int, {nullable:false})
    kyc_status!: number;

    @Field(() => Int, {nullable:false})
    user_role!: number;

    @Field(() => Int, {nullable:false})
    selfie!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
