import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { STATUS } from '../prisma/status.enum';

@ObjectType()
export class FundRaiser {

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => ID, {nullable:false})
    id!: string;

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

    @Field(() => [String], {nullable:true})
    supportingDocuments!: Array<string>;

    @Field(() => User, {nullable:false})
    createdBy?: User;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => STATUS, {nullable:false,defaultValue:'PENDING'})
    fundraisers_status!: keyof typeof STATUS;

    @Field(() => String, {nullable:true})
    contract_address!: string | null;
}
