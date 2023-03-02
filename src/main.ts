import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import corsOptionsDelegate from './express';
import { TransformInterceptor } from './interceptor/logger/logger.interceptor';
import { LoggerMiddleware } from './middleware/logger/logger.middleware';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { MicroserviceOptions } from '@nestjs/microservices';
import { grpcClientOptions } from './grpc-client.options';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //添加微服务
  app.connectMicroservice<MicroserviceOptions>(grpcClientOptions);

  // 监听所有的请求路由，并打印日志
  app.use(new LoggerMiddleware().use);
  //全局拦截器
  app.useGlobalInterceptors(new TransformInterceptor());

  //app.enableCors(corsOptionsDelegate);
  //app.setGlobalPrefix('overall-situation');//全局路由前缀

  //API
  const config = new DocumentBuilder()
    .setTitle('NestjsFW接口API')
    .setDescription('http Api 接口')
    .setVersion('1.0')
    .addTag('API')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-doct', app, document);


  await app.listen(3000);

  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
