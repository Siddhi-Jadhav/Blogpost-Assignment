import { UserEntity } from './user.entity';
import { EntityRepository } from 'typeorm';
import { Repository } from 'typeorm';
import { AuthCredentialsSignupDTO } from './dto/auth.credentials.signup.dto';
import { AuthCredentialsSigninDTO } from './dto/auth.credentials.signin.dto';

import * as crypto from 'crypto-js';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  async signup(authCredentialsSignupDTO: AuthCredentialsSignupDTO) {
    const user = new UserEntity();
    user.FirstName = authCredentialsSignupDTO.FirstName;
    user.LastName = authCredentialsSignupDTO.LastName;
    user.email = authCredentialsSignupDTO.email;
    user.password = `${crypto.MD5(authCredentialsSignupDTO.password)}`;
    await user.save();
  }

  async signin(authCredentialsSigninDTO: AuthCredentialsSigninDTO) {
    const { email, password } = authCredentialsSigninDTO;
    //find user by email
    const user = await this.findOne({ email });
    if (!user) {
      return null;
    }

    // check if user exist
    if (!user.validatePassword(password)) {
      return null;
    }

    return user;
  }
}
