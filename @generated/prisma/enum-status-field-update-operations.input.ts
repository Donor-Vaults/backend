import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { STATUS } from './status.enum';

@InputType()
export class EnumSTATUSFieldUpdateOperationsInput {

    @Field(() => STATUS, {nullable:true})
    set?: keyof typeof STATUS;
}
