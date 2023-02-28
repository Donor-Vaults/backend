import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { FundRaiserListRelationFilter } from '../fund-raiser/fund-raiser-list-relation-filter.input';
import { EnumKYCFilter } from '../prisma/enum-kyc-filter.input';
import { EnumRoleFilter } from '../prisma/enum-role-filter.input';

@InputType()
export class UserWhereInput {

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    email?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    mobile_number?: StringNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    date_of_birth?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    country?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    isVerified?: BoolFilter;

    @Field(() => FundRaiserListRelationFilter, {nullable:true})
    fundraisers?: FundRaiserListRelationFilter;

    @Field(() => EnumKYCFilter, {nullable:true})
    kyc_status?: EnumKYCFilter;

    @Field(() => EnumRoleFilter, {nullable:true})
    user_role?: EnumRoleFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    selfie?: StringNullableFilter;
}
