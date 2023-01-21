import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { STATUS } from './status.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumSTATUSFilter } from './nested-enum-status-filter.input';

@InputType()
export class NestedEnumSTATUSWithAggregatesFilter {

    @Field(() => STATUS, {nullable:true})
    equals?: keyof typeof STATUS;

    @Field(() => [STATUS], {nullable:true})
    in?: Array<keyof typeof STATUS>;

    @Field(() => [STATUS], {nullable:true})
    notIn?: Array<keyof typeof STATUS>;

    @Field(() => NestedEnumSTATUSWithAggregatesFilter, {nullable:true})
    not?: NestedEnumSTATUSWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumSTATUSFilter, {nullable:true})
    _min?: NestedEnumSTATUSFilter;

    @Field(() => NestedEnumSTATUSFilter, {nullable:true})
    _max?: NestedEnumSTATUSFilter;
}
