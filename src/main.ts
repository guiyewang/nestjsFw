import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from './interceptor/logger/logger.interceptor';
import { LoggerMiddleware } from './middleware/logger/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  // 监听所有的请求路由，并打印日志
  app.use(new LoggerMiddleware().use);
  //全局拦截器
  app.useGlobalInterceptors(new TransformInterceptor());
  //app.setGlobalPrefix('overall-situation');//全局路由前缀

  await app.listen(3000);
}
bootstrap();
