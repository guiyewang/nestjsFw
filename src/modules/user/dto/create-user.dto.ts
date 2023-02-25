import {IsNotEmpty, IsString } from "class-validator";



export class CreateUserDto {


    @IsString()
    //用户名
    readonly userName: string;

    @IsString()
    //密码
    readonly password: string;

    @IsString()
    //验证密码
    readonly validatePassword: string;

     //姓名
     @IsString()
     readonly name?: string;
 
     //职务
     @IsString()
     readonly position?: string;

}
