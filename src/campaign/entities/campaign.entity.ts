import { Field, registerEnumType } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
// import { DocumentModal } from '../../documents/models/document.models';
import { User } from '../../users/models/user.model';



export enum STATUS {
    NOT_INITILAIZED = "NOT_INITILAIZED",
    PENDING = "PENDING",
    APPROVED = "APPROVED",
    REJECTED = "REJECTED"
}


registerEnumType(STATUS, { name: 'STATUS', description: undefined })


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

   
    @Field(() => User, {nullable:true})
    user?: User | null;

   

    @Field(() => STATUS, {nullable:false,defaultValue:'PENDING'})
    status!: keyof typeof STATUS;

   
}
