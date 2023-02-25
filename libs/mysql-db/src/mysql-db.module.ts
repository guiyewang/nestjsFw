import { Logger, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import db from 'config/db';
import { User } from 'entitys/user-entitys/LoginEntitys';
import { MysqlDbService } from './mysql-db.service';

@Module({
  imports:[
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: db.mysql.host,
    port: db.mysql.port,
    username: db.mysql.user,
    password: db.mysql.password,
    database: db.mysql.database,
    synchronize: true,
    entities:[User]//__dirname+'/entitys/*.{ts,js}'
  }),
],
  providers: [MysqlDbService],
  exports: [MysqlDbService],
})
export class MysqlDbModule {}
