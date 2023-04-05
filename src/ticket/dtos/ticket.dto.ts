import { TicketStatus } from '../enums/ticket-status.enum';

export class TicketDto {
  customer_name!: string;
  age!: number;
  tickettype!: string;
  ticketstatus: string = TicketStatus.created;
  date!: Date;
}
