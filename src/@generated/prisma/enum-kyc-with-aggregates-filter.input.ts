import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { KYC } from './kyc.enum';
import { NestedEnumKYCWithAggregatesFilter } from './nested-enum-kyc-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumKYCFilter } from './nested-enum-kyc-filter.input';

@InputType()
export class EnumKYCWithAggregatesFilter {

    @Field(() => KYC, {nullable:true})
    equals?: keyof typeof KYC;

    @Field(() => [KYC], {nullable:true})
    in?: Array<keyof typeof KYC>;

    @Field(() => [KYC], {nullable:true})
    notIn?: Array<keyof typeof KYC>;

    @Field(() => NestedEnumKYCWithAggregatesFilter, {nullable:true})
    not?: NestedEnumKYCWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumKYCFilter, {nullable:true})
    _min?: NestedEnumKYCFilter;

    @Field(() => NestedEnumKYCFilter, {nullable:true})
    _max?: NestedEnumKYCFilter;
}
