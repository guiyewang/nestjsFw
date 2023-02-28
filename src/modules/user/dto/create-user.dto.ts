import {IsNotEmpty, IsString } from "class-validator";
import { ApiParam, ApiProperty, ApiPropertyOptional } from '@nestjs/swagger/dist';



export class CreateUserDto {


    @ApiProperty({
        description:"用户名 不能为空"
    })
    @IsString()
    //用户名
    readonly userName: string;

    @ApiProperty({
        description:"密码 不能为空"
    })
    @IsString()
    //密码
    readonly password: string;

    @ApiProperty({
        description:"密码二次验证 不能为空"
    })
    @IsString()
    //验证密码
    readonly validatePassword: string;

    @ApiPropertyOptional({
        description:"姓名 不能为空"
    })
     //姓名
     @IsString()
     readonly name?: string;
 
     @ApiPropertyOptional({
        description:" 不能为空"
    })
     //职务
     @IsString()
     readonly position?: string;

}
