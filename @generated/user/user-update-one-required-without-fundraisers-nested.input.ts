import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFundraisersInput } from './user-create-without-fundraisers.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutFundraisersInput } from './user-create-or-connect-without-fundraisers.input';
import { UserUpsertWithoutFundraisersInput } from './user-upsert-without-fundraisers.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutFundraisersInput } from './user-update-without-fundraisers.input';

@InputType()
export class UserUpdateOneRequiredWithoutFundraisersNestedInput {

    @Field(() => UserCreateWithoutFundraisersInput, {nullable:true})
    @Type(() => UserCreateWithoutFundraisersInput)
    create?: UserCreateWithoutFundraisersInput;

    @Field(() => UserCreateOrConnectWithoutFundraisersInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutFundraisersInput)
    connectOrCreate?: UserCreateOrConnectWithoutFundraisersInput;

    @Field(() => UserUpsertWithoutFundraisersInput, {nullable:true})
    @Type(() => UserUpsertWithoutFundraisersInput)
    upsert?: UserUpsertWithoutFundraisersInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutFundraisersInput, {nullable:true})
    @Type(() => UserUpdateWithoutFundraisersInput)
    update?: UserUpdateWithoutFundraisersInput;
}
