import { registerEnumType } from '@nestjs/graphql';

export enum KYC {
    NOT_INITIALIZED = "NOT_INITIALIZED",
    SUBMITTED = "SUBMITTED",
    ONGOING = "ONGOING",
    REJECTED = "REJECTED",
    APPROVED = "APPROVED"
}


registerEnumType(KYC, { name: 'KYCStatus', description: undefined })
