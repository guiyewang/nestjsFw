import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';
import {  ApiParam } from '@nestjs/swagger/dist';
import { ApiHeaders, ApiOperation } from '@nestjs/swagger/dist/decorators';


@ApiTags("用户信息")

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({summary:"注册用户"})
  @ApiParam({
    name:"创建注册用户"
  })

  @Post()
  create(@Body() createUserDto: CreateUserDto) {

    return this.userService.create(createUserDto);
  }

  @ApiParam({
    name:"获取所有用户信息"
  })
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @ApiParam({
    name:"根据ID获取用户信息"
  })
  @Get(':id')
  findOne(@Param('id') id: string) {


    //去除空格
    return this.userService.findOne(+id);
  }

  @ApiParam({
    name:"根据ID更新用户信息"
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @ApiParam({
    name:"根据ID删除用户信息"
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
