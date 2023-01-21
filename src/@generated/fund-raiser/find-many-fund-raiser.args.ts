import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FundRaiserWhereInput } from './fund-raiser-where.input';
import { Type } from 'class-transformer';
import { FundRaiserOrderByWithRelationInput } from './fund-raiser-order-by-with-relation.input';
import { FundRaiserWhereUniqueInput } from './fund-raiser-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FundRaiserScalarFieldEnum } from './fund-raiser-scalar-field.enum';

@ArgsType()
export class FindManyFundRaiserArgs {

    @Field(() => FundRaiserWhereInput, {nullable:true})
    @Type(() => FundRaiserWhereInput)
    where?: FundRaiserWhereInput;

    @Field(() => [FundRaiserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FundRaiserOrderByWithRelationInput>;

    @Field(() => FundRaiserWhereUniqueInput, {nullable:true})
    cursor?: FundRaiserWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [FundRaiserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof FundRaiserScalarFieldEnum>;
}
