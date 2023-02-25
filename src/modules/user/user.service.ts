import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'entitys/user-entitys/LoginEntitys';
import { config } from 'process';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';



@Injectable()
export class UserService {


  constructor(  
    @InjectRepository(User)
    private readonly userTy: Repository<User>,){

  }
  

  async create(createUserDto: CreateUserDto) {

    //查找全部信息
    const userAll = await this.findAll();
    const existsUserName = (await userAll).findIndex(x=>{
      if(createUserDto.userName == x.userName) null;
      return x;
    })
    if(existsUserName != null)return "账户已被注册。";
    const user = await this.userTy.create(createUserDto);
    const addInfo = await this.userTy.save(user);
    return addInfo;
  }

  async findAll() {
    return await this.userTy.find();
   
  }

  async findOne(id: number) {

    try {
      const user = await this.userTy.findOneBy({ id : id})
      return user;
    } catch (error) {
      return `查找"${id}"错误:`+error;
    }
    

  }

  async update(id: number, updateUserDto: UpdateUserDto) {

    try {

      const user = await this.userTy.update({id:id},updateUserDto);
      return user;

    } catch (error) {
      return `更新${id}错误:`+error;
    }
  }

  async remove(id: number) {

    try {
      const user  = await this.userTy.findOneBy({ id : id});
      const bl = await this.userTy.remove(user);
      return bl;
    } catch (error) {
      return `删除${id}错误:`+error;
    }
  }
}
