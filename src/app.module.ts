import { Module } from '@nestjs/common';
import { MysqlDbModule } from 'DB/mysql-db';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [MysqlDbModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
