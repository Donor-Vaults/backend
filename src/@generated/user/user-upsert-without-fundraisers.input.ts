import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutFundraisersInput } from './user-update-without-fundraisers.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutFundraisersInput } from './user-create-without-fundraisers.input';

@InputType()
export class UserUpsertWithoutFundraisersInput {

    @Field(() => UserUpdateWithoutFundraisersInput, {nullable:false})
    @Type(() => UserUpdateWithoutFundraisersInput)
    update!: UserUpdateWithoutFundraisersInput;

    @Field(() => UserCreateWithoutFundraisersInput, {nullable:false})
    @Type(() => UserCreateWithoutFundraisersInput)
    create!: UserCreateWithoutFundraisersInput;
}
