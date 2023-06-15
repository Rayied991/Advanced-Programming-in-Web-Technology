import {IsEmail, IsString,IsNotEmpty, IsStrongPassword, Matches, Length, MinLength, MaxLength, IsUrl} from 'class-validator'
export class AdminDTO{
    @IsString()
    @IsNotEmpty({message:"Name Cannot be Empty"})
    @Matches(/^[A-Za-z]+$/, { message: 'Enter a Proper Name!' })
    @Length(10)
    @MinLength(3)
    @MaxLength(10)
    // @IsUrl(undefined,{message:"Invalid Url"})
    // @Matches(/^localhost:3000\/admin\/addadmin$/, { message: 'Invalid URL' })
    name:string;
    
    @IsEmail({},{message:"Invalid Email"}) 
    @IsNotEmpty()
    email:string;

    @IsNotEmpty()
    @IsStrongPassword()
    Password:string;
    
}