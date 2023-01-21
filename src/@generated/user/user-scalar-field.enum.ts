import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    email = "email",
    name = "name",
    mobile_number = "mobile_number",
    date_of_birth = "date_of_birth",
    country = "country",
    password = "password",
    isVerified = "isVerified",
    kyc_status = "kyc_status",
    user_role = "user_role",
    selfie = "selfie"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
