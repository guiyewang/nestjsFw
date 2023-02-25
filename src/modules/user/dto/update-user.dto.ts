import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {

    @IsString()
    //用户名
    readonly userName: string;

    @IsString()
    //密码
    readonly password: string;

     //姓名
     @IsString()
     readonly name?: string;
 
     //职务
     @IsString()
     readonly position?: string;
}
