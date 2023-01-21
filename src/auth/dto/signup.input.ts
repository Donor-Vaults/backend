import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { InputType, Field, registerEnumType, } from '@nestjs/graphql';


@InputType()
export class SignupInput {

  @Field()
  @IsOptional()
  @IsEmail()
  email?: string;

  @Field()
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @Field()
  name?: string;


  @Field({ nullable: true })
  mobile_number?: string;


  @Field({ nullable: true })
  country?: string;


  @Field({ nullable: true })
  date_of_birth?: Date;
 

  @Field({ nullable: true })
  selfie?: string;
 
}


