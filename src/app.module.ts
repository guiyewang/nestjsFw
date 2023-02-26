import { Module } from '@nestjs/common';
import { MysqlDbModule } from 'DB/mysql-db';
import { WebsocketModule } from 'websocket/websocket';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [MysqlDbModule, UserModule,WebsocketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
