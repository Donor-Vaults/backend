import { registerEnumType } from '@nestjs/graphql';

export enum Role {
    ADMIN = "ADMIN",
    USER = "USER"
}


registerEnumType(Role, { name: 'RoleEnum', description: undefined })
