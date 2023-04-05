/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { TicketDto } from '../dtos/ticket.dto';
import { TicketService } from '../services/ticket.service';

@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Post()
  @HttpCode(201)
  async createTicket(@Body() ticket: TicketDto) {
    await this.ticketService.createTicket(ticket);
  }
}
