import { Component, OnInit } from '@angular/core';
import { Avia } from '../Avia.service';
import { Ticket } from '../module';

@Component({
  selector: 'app-air-passage',
  templateUrl: './air-passage.component.html',
  styleUrls: ['./air-passage.component.css']
})
export class AirPassageComponent implements OnInit {
  tickets: Ticket[] = []; // предположим, что у вас есть интерфейс Ticket

  city1: string = '';
  city2: string = '';
  depar_date: any; // исправлено на deper_date
  newNum: number = 0;

  constructor(private aviaService: Avia) { }

  ngOnInit(): void {
    this.loadTickets(); // Загружаем билеты при инициализации компонента
  }

  loadTickets() {
    this.aviaService.getTicket().subscribe(tickets => {
      this.tickets = tickets;
    });
  }
  searchPerformed = false;
  findTicket() {
    this.searchPerformed = true;
    this.aviaService.checkTickets(this.city1, this.city2, this.depar_date).subscribe(filteredTickets => {
      this.tickets = filteredTickets;
    });
  }
}
