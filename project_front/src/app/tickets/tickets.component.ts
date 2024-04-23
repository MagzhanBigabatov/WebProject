import { Component } from '@angular/core';
import { Avia } from '../Avia.service';
import { Ticket } from '../module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent {
  tickets: Ticket[] = [];

  constructor(private Avia: Avia) {}

  ngOnInit(): void {
    this.getTickets();
  }

  getTickets(): void {
    this.Avia.getTicket().subscribe((data: Ticket[]) => {
      this.tickets = data;
    });
  }

  // getTicketById(ticketId: number): void {
  //   this.Avia.getTickets_by_id(ticketId).subscribe((data: Ticket) => {
  //     // Handle the data as needed
  //   });
  //}
} 
