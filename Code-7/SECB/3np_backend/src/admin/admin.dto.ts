import {IsEmail, IsString,IsNotEmpty, IsStrongPassword, Matches, Length, MinLength, MaxLength, IsUrl} from 'class-validator'

export class AdminDTO {
  // @IsString({ message: "invalid name" })
  // @Matches(/^[a-zA-Z]+$/, { message: "enter a proper name" })
  name: string;

  // @IsEmail({}, { message: "invalid email" })
  email: string;
  phone: number;
  password: string;
  filenames:string;
}

export class AdminUpdateDTO {
  id: number;
  name: string;
  email: string;
  password: string;
}


export class AdminLoginDTO{
  // @IsEmail({},{message:"Invalid email"})
  email: string;
  password: string;

}