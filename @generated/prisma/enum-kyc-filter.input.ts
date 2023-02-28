import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { KYC } from './kyc.enum';
import { NestedEnumKYCFilter } from './nested-enum-kyc-filter.input';

@InputType()
export class EnumKYCFilter {

    @Field(() => KYC, {nullable:true})
    equals?: keyof typeof KYC;

    @Field(() => [KYC], {nullable:true})
    in?: Array<keyof typeof KYC>;

    @Field(() => [KYC], {nullable:true})
    notIn?: Array<keyof typeof KYC>;

    @Field(() => NestedEnumKYCFilter, {nullable:true})
    not?: NestedEnumKYCFilter;
}
