import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { DaprClient } from 'dapr-client';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('DaprClient') private readonly daprClient: DaprClient,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  publishEvent(@Body() body: any) {
    this.daprClient.pubsub.publish('redis', 'channel', body);
    return 'Evento publicado exitosamente';
  }
}
