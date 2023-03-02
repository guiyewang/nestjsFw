import { Injectable } from '@nestjs/common';
import { ConnectedSocket, MessageBody, OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse } from '@nestjs/websockets';
import { from, map, Observable } from 'rxjs';
import { Server, Socket } from 'socket.io';



@WebSocketGateway(3100,{
  // 域名
  //namespace: '/FW',
  // 解决跨域
  allowEIO3: true,
  transports:['websocket'],
  cors: {
    origin: '*',
    credentials: true,
  },

})
@Injectable()
export class WebsocketService implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {


      @WebSocketServer()
      server: Server;

      //初始化
      afterInit(server: Server) {
        console.log("初始化");
        
    }

    //链接成功
    handleConnection(client: Socket, ...args: any[]) {
        console.log("连接成功");
        client.broadcast.emit("ALL","有客户连接成功")


    }

    //断开连接
    handleDisconnect(client: Socket) {
        console.log("断开连接");
    }



  
    @SubscribeMessage('events')
    findAll(@MessageBody() data: any): Observable<WsResponse<number>> {
      return from([1, 2, 3]).pipe(map(item => ({ event: 'events', data: item })));
    }
  
    @SubscribeMessage('TRO')
    async identity( @ConnectedSocket() client: Socket,@MessageBody() data: string) {
      console.log(data);
      await client;
      client.broadcast.emit("TR",data)
    }

}
