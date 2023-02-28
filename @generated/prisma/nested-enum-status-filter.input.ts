import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { STATUS } from './status.enum';

@InputType()
export class NestedEnumSTATUSFilter {

    @Field(() => STATUS, {nullable:true})
    equals?: keyof typeof STATUS;

    @Field(() => [STATUS], {nullable:true})
    in?: Array<keyof typeof STATUS>;

    @Field(() => [STATUS], {nullable:true})
    notIn?: Array<keyof typeof STATUS>;

    @Field(() => NestedEnumSTATUSFilter, {nullable:true})
    not?: NestedEnumSTATUSFilter;
}
