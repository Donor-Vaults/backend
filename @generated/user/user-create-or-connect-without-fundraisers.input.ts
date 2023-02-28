import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutFundraisersInput } from './user-create-without-fundraisers.input';

@InputType()
export class UserCreateOrConnectWithoutFundraisersInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutFundraisersInput, {nullable:false})
    @Type(() => UserCreateWithoutFundraisersInput)
    create!: UserCreateWithoutFundraisersInput;
}
