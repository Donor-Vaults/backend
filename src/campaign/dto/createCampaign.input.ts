import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
// import { DocumentCreateNestedManyWithoutFundRaiserInput } from '../document/document-create-nested-many-without-fund-raiser.input';


@InputType()
export class FundRaiserCreateInput {

   
   
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

    // @Field(() => DocumentCreateNestedManyWithoutFundRaiserInput, {nullable:true})
    // supportingDocuments?: DocumentCreateNestedManyWithoutFundRaiserInput;



}
