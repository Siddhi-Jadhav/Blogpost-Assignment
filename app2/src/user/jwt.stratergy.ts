import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserRepository } from './user.repository';
import { UnauthorizedException } from '@nestjs/common';
import { JwtPayload } from './jwt.payload';

export class JwtStratergy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {
    //get the token from incoming request and
    //validate it using secret
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'secret',
    });
  }

  async validate(payload: JwtPayload) {
    //get the user id or email from payload
    const user = this.userRepository.findOne({ id: payload.id });

    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
