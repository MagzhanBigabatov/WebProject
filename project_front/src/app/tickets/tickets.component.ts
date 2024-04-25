import { Component } from '@angular/core';
import { Avia } from '../Avia.service';
import { Ticket } from '../module';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent {
  tickets: Ticket[] = [];

  newticId: number = 0;
  city1: string = "";
  city2: string = "";
  cost: number = 0;
  company: string = "";
  depar_date: string = "";
  depar_time: string = "";
  arrival_date: string = "";
  arrival_time: string = "";
  count: number = 0;  

  constructor(private Avia: Avia) {}

  ngOnInit(): void {
    this.getTickets();
  }

  getTickets(): void {
    this.Avia.getTicket().subscribe((data: Ticket[]) => {
      this.tickets = data;
    });
  }

  createTickets(): void {
    this.Avia.createTickets(
      this.city1, 
      this.city2, 
      this.cost,
      this.company,
      this.depar_date,
      this.depar_time,
      this.arrival_date,
      this.arrival_time,
      this.count
    ).subscribe(() => {
      this.city1 = ''; 
      this.city2 = ''; 
      this.cost = 0;
      this.company = '';
      this.depar_date = "";
      this.depar_time = "";
      this.arrival_date = "";
      this.arrival_time = "";
      this.count = 0;

      alert("Tickets created");
      this.getTickets();
    });
  }

  check(ticId: number): boolean {
    const tic = this.tickets.find(tic => tic.id === ticId);
    return !!tic;
  }

  updateTickets(): void {
    this.Avia.updateTicket(
      this.newticId,
      this.city1, 
      this.city2, 
      this.cost,
      this.company,
      this.depar_date,
      this.depar_time,
      this.arrival_date,
      this.arrival_time,
      this.count
    ).subscribe(() => {
      this.city1 = ''; 
      this.city2 = ''; 
      this.cost = 0;
      this.company = '';
      this.depar_date = "";
      this.depar_time = "";
      this.arrival_date = "";
      this.arrival_time = "";
      this.count = 0;
  
      alert("Tickets updated");
      this.getTickets(); // Обновляем список билетов после успешного обновления
    }, error => {
      console.error("Error updating ticket:", error);
      alert("Failed to update ticket. Check the console for error details.");
    });
  }

  deleteTicket(ticketId: number): void {
    if (confirm("Are you sure you want to delete this ticket?")) {
      this.Avia.deleteTicket(ticketId).subscribe(() => {
        this.tickets = this.tickets.filter(ticket => ticket.id !== ticketId);
        alert("Ticket deleted");
      }, error => {
        console.error("Error deleting ticket:", error);
        alert("Failed to delete ticket. Check the console for error details.");
      });
    }
  }
}
