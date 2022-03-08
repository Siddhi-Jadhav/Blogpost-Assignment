import { JwtPayload } from './jwt.payload';
import { UserRepository } from './user.repository';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { AuthCredentialsSignupDTO } from './dto/auth.credentials.signup.dto';
import { AuthCredentialsSigninDTO } from './dto/auth.credentials.signin.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,

    //used for creating jwt token
    private jwtService: JwtService,
  ) {}

  async signup(authCredentialsSignupDTO: AuthCredentialsSignupDTO) {
    return this.userRepository.signup(authCredentialsSignupDTO);
  }

  async signin(authCredentialsSigninDTO: AuthCredentialsSigninDTO) {
    const user = await this.userRepository.signin(authCredentialsSigninDTO);
    if (!user) {
      throw new NotFoundException('user not found');
    }

    //create JWT token
    const payload: JwtPayload = {
      email: user.email,
      id: user.id,
    };

    //create and return the token
    const token = await this.jwtService.sign(payload);
    return { token };
  }
}
