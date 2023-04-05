import { TicketService } from './services/ticket.service';
import { TicketController } from './controllers/ticket.controller';
import { Module } from '@nestjs/common';
import { DaprModule } from 'src/shared/dapr/dapr.module';
import { PrismaModule } from 'src/shared/prisma/prisma.module';

@Module({
  imports: [PrismaModule, DaprModule],
  controllers: [TicketController],
  providers: [TicketService],
})
export class TicketModule {}
