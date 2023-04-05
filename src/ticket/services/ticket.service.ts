import { Inject, Injectable } from '@nestjs/common';
import { DaprClient } from 'dapr-client';
import { PrismaService } from 'src/shared/prisma/services/prisma.service';
import { Prisma } from '@prisma/client';
import { TicketDto } from '../dtos/ticket.dto';
import { TicketStatus } from '../enums/ticket-status.enum';

@Injectable()
export class TicketService {
  constructor(
    @Inject('DaprClient') private readonly daprClient: DaprClient,
    private readonly prismaService: PrismaService,
  ) {}

  async createTicket(ticketDto: TicketDto) {
    const data: Prisma.TicketUncheckedCreateInput = {
      ticketstatus: TicketStatus.created,
      ...ticketDto,
    };
    const ticket = await this.prismaService.ticket.create({ data });

    this.updateTicketHistory(ticket);

    await this.daprClient.pubsub.publish('redis', 'ticket-created', {
      ...ticket,
      ticket_id: ticket.ticket_id,
    });
  }

  async updateTicketHistory(ticket: Prisma.TicketUncheckedCreateInput) {
    const data: Prisma.Ticket_HistoryUncheckedCreateInput = {
      ticketid: ticket.ticket_id,
      tickettype: ticket.tickettype,
      ticketstatus: ticket.ticketstatus,
    };
    await this.prismaService.ticket_History.create({ data });
  }
}
