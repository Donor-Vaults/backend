import { PrismaService } from 'nestjs-prisma';
import { ConflictException, Injectable } from '@nestjs/common';
import { PasswordService } from '../auth/password.service';
import { ChangePasswordInput } from './dto/change-password.input';
import { UpdateUserInput } from './dto/update-user.input';
import { NomineeInput } from './dto/createNominee.input';
import { Prisma } from '@prisma/client';
import { Args } from '@nestjs/graphql';
import { User } from './models/user.model';
import { UpdateOneUserArgs } from '../@generated/user/update-one-user.args';
@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private passwordService: PasswordService
  ) {}

  // ###############################################################
  // ################################################################
  // ################################################################
  // ########################## Update User Details ##################
  // ################################################################
  // ###############################################################
  // ##################################################################

  async updateUser(userId: string, newUserData: UpdateOneUserArgs) {

    console.log({newUserData})
    const updated_user = this.prisma.user.update({
      data: newUserData.data,
      where: {
        id: userId,
      },
    });
    return updated_user;
  }

  async getUser(userId: string) {
    const user = await this.prisma.user.findFirst({
      where: { id: userId },
    });

    if (!user) {
      throw new Error("Invalid User")
    }
    const fundraisers = await this.prisma.fundRaiser.findMany({
      where: { userId: user.id },
    });
    const data = {...user,fundraisers}
    return data;
  }

  // ###################### Update Nominee Details ##################

  // async upsertNominee(userId: string, newNomineeData: NomineeInput) {
  //   const payload = { ...newNomineeData, userId };
  //   const updated_nominee = this.prisma.nominee.upsert({
  //     create: { ...payload },
  //     update: { ...payload },
  //     where: {
  //       userId: userId,
  //     },
  //   });
  //   return updated_nominee;
  // }

  // ###################################################################################################
  // #################################### Change Password ###########################################
  // ###############################################################################################

  async changePassword(changePasswordValue: ChangePasswordInput) {
    const hashedPassword = await this.passwordService.hashPassword(
      changePasswordValue.newPassword
    );
    try {
      const updated_password = this.prisma.user.update({
        data: {
          password: hashedPassword,
        },
        where: {
          // private_key: changePasswordValue.private_key,
        },
      });
      return updated_password;
    } catch (e) {}
  }
}
