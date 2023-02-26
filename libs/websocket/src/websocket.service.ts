import { Injectable } from '@nestjs/common';
import { MessageBody, OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse } from '@nestjs/websockets';
import { from, map, Observable } from 'rxjs';
import { Server, Socket } from 'socket.io';



@WebSocketGateway(3001,{
    allowEIO3: true,
    transports: ['websocket'],
  cors: {
    origin: '*',
    credentials: true
  }
})
@Injectable()
export class WebsocketService implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

    //初始化
    afterInit(server: Server) {
        console.log("初始化");
        
    }

    //链接成功
    handleConnection(client: Socket, ...args: any[]) {
        console.log("连接成功");
    }

    //断开连接
    handleDisconnect(client: Socket) {
        console.log("断开连接");
    }


    @WebSocketServer()
    server: Server;
  
    @SubscribeMessage('events')
    findAll(@MessageBody() data: any): Observable<WsResponse<number>> {
      return from([1, 2, 3]).pipe(map(item => ({ event: 'events', data: item })));
    }
  
    @SubscribeMessage('identity')
    async identity(@MessageBody() data: number): Promise<number> {
      console.log(data);
        
      return data;
    }

}
