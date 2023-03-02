import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'EV.Framework', // ['hero', 'hero2']
    protoPath: join(__dirname, './proto/*.proto'), // ['./hero/hero.proto', './hero/hero2.proto']
    url:"127.0.0.1:3200"  
},
};
