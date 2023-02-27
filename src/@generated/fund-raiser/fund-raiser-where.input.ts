import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { EnumSTATUSFilter } from '../prisma/enum-status-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class FundRaiserWhereInput {

    @Field(() => [FundRaiserWhereInput], {nullable:true})
    AND?: Array<FundRaiserWhereInput>;

    @Field(() => [FundRaiserWhereInput], {nullable:true})
    OR?: Array<FundRaiserWhereInput>;

    @Field(() => [FundRaiserWhereInput], {nullable:true})
    NOT?: Array<FundRaiserWhereInput>;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    benificiary?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    category?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    featuredImage?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    firstName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    lastName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    fundraiserName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    fundraiserDescription?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    goalAmount?: IntFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    supportingDocuments?: StringNullableListFilter;

    // @Field(() => UserRelationFilter, {nullable:true})
    // createdBy?: UserRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => EnumSTATUSFilter, {nullable:true})
    fundraisers_status?: EnumSTATUSFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    contract_address?: StringNullableFilter;
}
