import { registerEnumType } from '@nestjs/graphql';

export enum FundRaiserScalarFieldEnum {
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    id = "id",
    benificiary = "benificiary",
    category = "category",
    featuredImage = "featuredImage",
    firstName = "firstName",
    lastName = "lastName",
    fundraiserName = "fundraiserName",
    fundraiserDescription = "fundraiserDescription",
    goalAmount = "goalAmount",
    supportingDocuments = "supportingDocuments",
    userId = "userId",
    fundraisers_status = "fundraisers_status",
    contract_address = "contract_address"
}


registerEnumType(FundRaiserScalarFieldEnum, { name: 'FundRaiserScalarFieldEnum', description: undefined })
