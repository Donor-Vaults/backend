import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { EnumSTATUSWithAggregatesFilter } from '../prisma/enum-status-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class FundRaiserScalarWhereWithAggregatesInput {

    @Field(() => [FundRaiserScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<FundRaiserScalarWhereWithAggregatesInput>;

    @Field(() => [FundRaiserScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<FundRaiserScalarWhereWithAggregatesInput>;

    @Field(() => [FundRaiserScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<FundRaiserScalarWhereWithAggregatesInput>;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    benificiary?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    category?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    featuredImage?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    firstName?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    lastName?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    fundraiserName?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    fundraiserDescription?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    goalAmount?: IntWithAggregatesFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    supportingDocuments?: StringNullableListFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @Field(() => EnumSTATUSWithAggregatesFilter, {nullable:true})
    fundraisers_status?: EnumSTATUSWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    contract_address?: StringNullableWithAggregatesFilter;
}
