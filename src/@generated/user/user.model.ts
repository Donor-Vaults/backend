import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { FundRaiser } from '../fund-raiser/fund-raiser.model';
import { KYC } from '../prisma/kyc.enum';
import { Role } from '../prisma/role.enum';
import { UserCount } from './user-count.output';

@ObjectType("UserData")
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:true})
    email!: string | null;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => String, {nullable:true})
    mobile_number!: string | null;

    @Field(() => Date, {nullable:true})
    date_of_birth!: Date | null;

    @Field(() => String, {nullable:true})
    country!: string | null;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isVerified!: boolean;

    @Field(() => [FundRaiser], {nullable:true})
    fundraisers?: Array<FundRaiser>;

    @Field(() => KYC, {nullable:false,defaultValue:'NOT_INITIALIZED'})
    kyc_status!: keyof typeof KYC;

    @Field(() => Role, {nullable:false,defaultValue:'USER'})
    user_role!: keyof typeof Role;

    @Field(() => String, {nullable:true})
    selfie!: string | null;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
