import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { KYC } from './kyc.enum';

@InputType()
export class EnumKYCFieldUpdateOperationsInput {

    @Field(() => KYC, {nullable:true})
    set?: keyof typeof KYC;
}
