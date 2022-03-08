/* eslint-disable prettier/prettier */
import { IsNotEmpty, MinLength } from 'class-validator';

export class AuthCredentialsSignupDTO {
  @IsNotEmpty()
  FirstName: string;

  @IsNotEmpty()
  LastName: string;

  @IsNotEmpty()
  @MinLength(10)
  email: string;

  @IsNotEmpty()
  @MinLength(5)
  password: string;
}
