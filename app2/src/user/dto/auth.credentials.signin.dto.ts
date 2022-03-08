/* eslint-disable prettier/prettier */
import { IsNotEmpty, MinLength } from 'class-validator';

export class AuthCredentialsSigninDTO {

  @IsNotEmpty()
  @MinLength(10)
  email: string;

  @IsNotEmpty()
  @MinLength(5)
  password: string;
}
