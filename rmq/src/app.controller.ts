import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('test_service') private readonly client: ClientProxy,
  ) {}

  @Get()
  getHello(): Observable<number> {
    return this.client.send<number>({ cmd: 'test' }, '');
  }

  @MessagePattern({ cmd: 'test' })
  test(): string {
    return '';
  }
}
