import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'test_service',
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
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
