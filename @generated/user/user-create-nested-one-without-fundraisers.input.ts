import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFundraisersInput } from './user-create-without-fundraisers.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutFundraisersInput } from './user-create-or-connect-without-fundraisers.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutFundraisersInput {

    @Field(() => UserCreateWithoutFundraisersInput, {nullable:true})
    @Type(() => UserCreateWithoutFundraisersInput)
    create?: UserCreateWithoutFundraisersInput;

    @Field(() => UserCreateOrConnectWithoutFundraisersInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutFundraisersInput)
    connectOrCreate?: UserCreateOrConnectWithoutFundraisersInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
