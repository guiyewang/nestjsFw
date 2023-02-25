import { Injectable } from '@nestjs/common';
import { MysqlDbService } from 'DB/mysql-db';
import { join } from 'path';

@Injectable()
export class AppService {

  constructor(private readonly mysqlDbService: MysqlDbService) {}
  public getHello(): string {

    try {
   

      return 'Hello World!';
    } catch (error) {
      
    }

  }
}
