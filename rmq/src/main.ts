import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [
        'amqp://MjphbXFwLWNuLTJyNDI0ejdlbzAwMTpMVEFJYWxmMDgwM1VZOXdI:NjI4QkM1QUU1QTM1RDk2MTE1NUYwREJGODcwOTc0M0U5ODQxRTlGRDoxNjE4ODAxODExMjcz@amqp-cn-2r424z7eo001.mq-amqp.cn-shenzhen-429403-a.aliyuncs.com/bellcode',
      ],
      queue: 'test_samples',
      queueOptions: {
        durable: true,
      },
    },
  });
  await app.startAllMicroservicesAsync();
  await app.listen(3002);
}
bootstrap();
