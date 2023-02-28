import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { KYC } from './kyc.enum';

@InputType()
export class NestedEnumKYCFilter {

    @Field(() => KYC, {nullable:true})
    equals?: keyof typeof KYC;

    @Field(() => [KYC], {nullable:true})
    in?: Array<keyof typeof KYC>;

    @Field(() => [KYC], {nullable:true})
    notIn?: Array<keyof typeof KYC>;

    @Field(() => NestedEnumKYCFilter, {nullable:true})
    not?: NestedEnumKYCFilter;
}
