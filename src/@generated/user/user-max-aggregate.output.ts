import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { KYC } from '../prisma/kyc.enum';
import { Role } from '../prisma/role.enum';

@ObjectType()
export class UserMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    mobile_number?: string;

    @Field(() => Date, {nullable:true})
    date_of_birth?: Date | string;

    @Field(() => String, {nullable:true})
    country?: string;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;

    @Field(() => KYC, {nullable:true})
    kyc_status?: keyof typeof KYC;

    @Field(() => Role, {nullable:true})
    user_role?: keyof typeof Role;

    @Field(() => String, {nullable:true})
    selfie?: string;
}
