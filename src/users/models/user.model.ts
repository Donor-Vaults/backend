import 'reflect-metadata';
import {
  ObjectType,
  registerEnumType,
  HideField,
  Field,
} from '@nestjs/graphql';
import { IsEmail, registerDecorator } from 'class-validator';
import { BaseModel } from 'src/common/models/base.model';
import { Role, KYC} from '@prisma/client';
// import { Document } from 'src/documents/entities/document.entity';

// import { DocumentModal } from 'src/documents/models/document.models';
import { NomineeModel} from './nominee.model'; 

registerEnumType(Role, {
  name: 'Role',
  description: 'User role',
});


registerEnumType(KYC, {
  name: 'KYC',
  description: 'User KYC Status',
});

@ObjectType()
export class User extends BaseModel {
  @Field()
  @IsEmail()
  email?: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => Role)
  role: Role;


  @HideField()
  password: string;

  @Field(() => String)
  id!: string;

  @Field(() => Date)
  createdAt!: Date;

  @Field(() => Date)
  updatedAt!: Date;

  @Field(() => String, { nullable: true })
  father_or_husband_name?: string | null;

  @Field(() => String, { nullable: true })
  mobile_number?: string | null;

  @Field(() => String, { nullable: true })
  alternate_mobile_number?: string | null;

  // @Field(() => [DocumentModal])
  // documents?:DocumentModal[]|null


  @Field(() => NomineeModel)
  nominee?: NomineeModel;

  @Field(() => KYC)
  kyc!: KYC
  

  @Field(() => Date, { nullable: true })
  date_of_birth?: Date | null;

  @Field(() => String, { nullable: true })
  demat_account?: string | null;


 


  // @Field(()=> Membership)
  // membership?:Membership



  
}
