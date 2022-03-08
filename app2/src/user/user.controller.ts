import { UserEntity } from './user.entity';
import { UserService } from './user.service';
import { AuthCredentialsSigninDTO } from './dto/auth.credentials.signin.dto';
import { AuthCredentialsSignupDTO } from './dto/auth.credentials.signup.dto';

import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './get.user.decorator';

@Controller('user')
export class UserController {
  constructor(private UserService: UserService) {}

  @Get('/profile')
  @UseGuards(AuthGuard())
  getProfile(@GetUser() user: UserEntity) {
    console.log(user);
  }

  @Post('/signup')
  @UsePipes(ValidationPipe)
  signup(@Body() authCredentialsSignupDTO: AuthCredentialsSignupDTO) {
    return this.UserService.signup(authCredentialsSignupDTO);
  }

  @Post('/signin')
  @UsePipes(ValidationPipe)
  signin(@Body() authCredentialsSigninDTO: AuthCredentialsSigninDTO) {
    return this.UserService.signin(authCredentialsSigninDTO);
  }
}
