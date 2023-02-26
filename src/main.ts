import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import corsOptionsDelegate from './express';
import { TransformInterceptor } from './interceptor/logger/logger.interceptor';
import { LoggerMiddleware } from './middleware/logger/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  // 监听所有的请求路由，并打印日志
  app.use(new LoggerMiddleware().use);
  //全局拦截器
  app.useGlobalInterceptors(new TransformInterceptor());

  app.enableCors(corsOptionsDelegate);

  //app.setGlobalPrefix('overall-situation');//全局路由前缀

  await app.listen(3000);

  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
