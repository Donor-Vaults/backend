import { PrismaService } from 'nestjs-prisma';
import {
  Resolver,
  Query,
  Parent,
  Mutation,
  Args,
  ResolveField,
  Info,
} from '@nestjs/graphql';
import { ConflictException, UseGuards } from '@nestjs/common';
import { UserEntity } from '../common/decorators/user.decorator';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { UsersService } from './users.service';
// import { User } from './models/user.model';
import { ChangePasswordInput } from './dto/change-password.input';
import { UpdateUserInput } from './dto/update-user.input';
// import { UpdateNomineeInput } from './dto/update-user.input';
import { NomineeInput } from './dto/createNominee.input';
import { Nominee } from './entities/nominee.entity';
import { UserIdArgs } from './args/user-id.args';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { User as UserModal } from '../@generated/user/user.model'
import { UserWhereInput } from '../@generated/user/user-where.input';
import { GraphQLResolveInfo } from 'graphql';
import { PrismaSelect } from '@paljs/plugins';
import { UpdateOneUserArgs } from '../@generated/user/update-one-user.args';


// 
@Resolver(() => UserModal)
@UseGuards(GqlAuthGuard)
export class UsersResolver {
  constructor(
    private usersService: UsersService,
    private prisma: PrismaService
  ) {}


// *********************************Details about the User ********************
@UseGuards(GqlAuthGuard)
  @Query(() => UserModal)
  async me(@UserEntity() user:UserModal) {
    const _user = await this.usersService.getUser(user.id);
    return _user
  }

// *********************************Updated  User details********************
 


@UseGuards(GqlAuthGuard)
@Query(() => [UserModal])
async users(
  @Args('where') where: UserWhereInput,
  @Info() info: GraphQLResolveInfo,
  @UserEntity() user:UserModal
) {

  if (user.user_role !== "ADMIN") {
    throw new Error("Not Allowed")
  }
  const select = new PrismaSelect(info).value;
  // console.log('select', select);
  // return await prisma.user.findMany({ where, ...select });
  const users = await this.prisma.user.findMany({
    where,
    ...select,
  });
  return users;
}

  
  
  
  @UseGuards(GqlAuthGuard)
  @Mutation(() => UserModal)
  async updateUser(
    @UserEntity() user: UserModal,
    @Args('') newUserData: UpdateOneUserArgs
  ) {

    if (user.user_role !== "ADMIN") {
      throw new Error("Not Allowed")
    }
   
    return this.usersService.updateUser(newUserData.where.id, newUserData);
  }



}
