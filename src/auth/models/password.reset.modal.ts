import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PasswordResetByLink  {
  @Field()
  link: string;
  
  @Field()
  accessToken:string
}
