import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { STATUS } from '../prisma/status.enum';

@ObjectType()
export class FundRaiserMinAggregate {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    benificiary?: string;

    @Field(() => String, {nullable:true})
    category?: string;

    @Field(() => String, {nullable:true})
    featuredImage?: string;

    @Field(() => String, {nullable:true})
    firstName?: string;

    @Field(() => String, {nullable:true})
    lastName?: string;

    @Field(() => String, {nullable:true})
    fundraiserName?: string;

    @Field(() => String, {nullable:true})
    fundraiserDescription?: string;

    @Field(() => Int, {nullable:true})
    goalAmount?: number;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => STATUS, {nullable:true})
    fundraisers_status?: keyof typeof STATUS;

    @Field(() => String, {nullable:true})
    contract_address?: string;
}
