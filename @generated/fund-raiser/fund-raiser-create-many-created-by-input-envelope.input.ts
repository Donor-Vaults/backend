import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FundRaiserCreateManyCreatedByInput } from './fund-raiser-create-many-created-by.input';
import { Type } from 'class-transformer';

@InputType()
export class FundRaiserCreateManyCreatedByInputEnvelope {

    @Field(() => [FundRaiserCreateManyCreatedByInput], {nullable:false})
    @Type(() => FundRaiserCreateManyCreatedByInput)
    data!: Array<FundRaiserCreateManyCreatedByInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
