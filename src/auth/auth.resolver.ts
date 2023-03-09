import {
  Resolver,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Auth } from './models/auth.model';
import { Token } from './models/token.model';
import { LoginInput } from './dto/login.input';
import { SignupInput } from './dto/signup.input';
import { RefreshTokenInput } from './dto/refresh-token.input';
import { User } from '../users/models/user.model';
import { PasswordRequestInput, PasswordRequestByLinkInput } from './dto/passwordRequest.input';
import { ChangePasswordWithPrivateKeyInput } from './dto/forget-password.input';
import { createTransport } from "nodemailer"
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from './gql-auth.guard';
import { UserEntity } from '../common/decorators/user.decorator';
import { User as UserModal } from '../@generated/user/user.model'
import { PasswordResetByLink } from './models/password.reset.modal';



@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly auth: AuthService) { }

  async sendEmail(to: String, subject: String, text: String) {

    let transporter = createTransport({
      host: 'smtp.titan.email',
      port: 465,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
      }
    })

    const message = {
      from: process.env.EMAIL,
      to,
      subject,
      html: text
    }

    await transporter.sendMail(message);
  }

  @Mutation(() => Auth)
  async signup(
    @Args('data')
    data: SignupInput
  ) {
    const { accessToken, refreshToken } = await this.auth.createUser(data);
    const link = `https://donor.finance/verifyEmail?id=${accessToken}`;

    this.sendEmail(data.email, "Donor Account Successfully Created",
      `<html>
      Thank you for registering on DONOR platform!<br/>
      To complete the verification process, please click on this link: <a href="${link}" target="_blank">Click to verify (${link})</a>
      <br/>
      Best Regards, <br/>
      DONOR Support | noreply@donor.finance
      </html>`)
    return {
      accessToken,
      refreshToken
    };
  }

  @Mutation(() => Auth)
  async login(
    @Args('data')
    {
      email,
      password,
    }: LoginInput
  ) {
    const { accessToken, refreshToken } = await this.auth.login(
      email,
      password
    );
    return {
      accessToken,
      refreshToken,
    };
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Auth)
  async passwordresetRequest(
    @Args('data')
    { newPassword }: PasswordRequestInput,
    @UserEntity() user: UserModal
  ) {
    const { accessToken } = await this.auth.passwordresetRequest(user.id, newPassword);
    return {
      accessToken,
    };
  }


  @UseGuards(GqlAuthGuard)
  @Mutation(() => Auth)
  async verifyEmail(
    @UserEntity() user: UserModal
  ) {
    const { accessToken } = await this.auth.markEmailVerify(user.id);
    return {
      accessToken,
    };
  }


  @Mutation(() => PasswordResetByLink)
  async passwordresetRequestByLink(
    @Args('data')
    { email }: PasswordRequestByLinkInput,
  ) {
    const { accessToken, name } = await this.auth.passwordresetRequestByEmail(email);

    console.log("dssdsdsdsdsdsdsd", email)
    const link = `https://donor.finance/resetpassword?request=${accessToken}`
    const emailText = `<html>Hello ${name}, Your Password Reset URL is:<br/> <a href="${link}" target="_blank">${link}</a> </html>`
    this.sendEmail(email, "Donor Platfrom Password Reset Link", emailText)
    return {
      link: "",
      accessToken: ""
    };
  }

  // @Mutation(()=>EmptyModal)
  // async forgetPasswordWithPrivateKey(@Args('data') payload:ChangePasswordWithPrivateKeyInput){
  //  return this.auth.forgetPasswordWithPrivateKey(payload)
  // }

  @Mutation(() => Token)
  async refreshToken(@Args() { token }: RefreshTokenInput) {
    return this.auth.refreshToken(token);
  }

  @ResolveField('user', () => User)
  async user(@Parent() auth: Auth) {
    return await this.auth.getUserFromToken(auth.accessToken);
  }
}
