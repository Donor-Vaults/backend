import { registerEnumType } from '@nestjs/graphql';

export enum STATUS {
    NOT_INITILAIZED = "NOT_INITILAIZED",
    PENDING = "PENDING",
    APPROVED = "APPROVED",
    REJECTED = "REJECTED"
}


registerEnumType(STATUS, { name: 'STATUS', description: undefined })
