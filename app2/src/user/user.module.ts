import { JwtStratergy } from './jwt.stratergy';
import { UserRepository } from './user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    //for JWT dependency
    JwtModule.register({
      secret: 'secret',
      signOptions: {
        expiresIn: 3600,
      },
    }),
    //for passport
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    //for TypeORM dependency
    TypeOrmModule.forFeature([UserRepository]),
  ],
  controllers: [UserController],
  providers: [UserService, JwtStratergy],
  //to use this providers in the TaskModule
  exports: [JwtStratergy, PassportModule],
})
export class UserModule {}
