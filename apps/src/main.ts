import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { TransformInterceptor } from '@libs/common/interceptors/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // config
  const configService = app.get(ConfigService);

  // cookie
  app.use(cookieParser());

  // validate
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  // swagger
  const config = new DocumentBuilder()
    .setTitle('API Docs')
    .setDescription('Tài liệu API cho hệ thống')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  // interceptor
  app.useGlobalInterceptors(new TransformInterceptor()); 

  // port
  const port = configService.get<number>('PORT') || 3000;
  
  // cors FE
  app.enableCors({
    origin: configService.get<string>('FRONTEND_URL'),
    credentials: true,
  });

  await app.listen(port);
}
void bootstrap();
