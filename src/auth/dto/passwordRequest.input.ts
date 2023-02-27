import { IsNotEmpty, MinLength } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class PasswordRequestInput {
  
  @Field()
  newPassword: string;

}


@InputType()
export class PasswordRequestByLinkInput {
  
  @Field()
  email: string;
}


