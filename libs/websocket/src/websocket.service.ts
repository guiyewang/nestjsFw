import { Injectable } from '@nestjs/common';
import { MessageBody, OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse } from '@nestjs/websockets';
import { from, map, Observable } from 'rxjs';
import { Server } from 'socket.io';


@WebSocketGateway(3001,{
    transports: ["websocket"],
    allowEIO3: true,
  cors: {
    origin: '*',
    credentials: true
  }
})
@Injectable()
export class WebsocketService implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  
  @WebSocketServer()
  server: Server;




    //初始化
    afterInit(server: Server) {
      
        console.log("初始化"+server);
        
    }

    handleConnection(client: any, ...args: any[]) {
      console.log("初始化s"+this.server.path);
    }
    handleDisconnect(client: any) {
      console.log("初始化sa");
    }


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
