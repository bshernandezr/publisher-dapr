import { TicketModule } from './ticket/ticket.module';
import { DaprModule } from './shared/dapr/dapr.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [TicketModule, DaprModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
