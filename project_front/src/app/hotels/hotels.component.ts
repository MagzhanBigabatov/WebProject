import { Component } from '@angular/core';
import { Hotel } from '../module';
import { Avia } from '../Avia.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent {
  hotels: Hotel[] = [];

  constructor(private Avia: Avia) {}

  ngOnInit(): void {
    this.getTickets();
  }

  getTickets(): void {
    this.Avia.getHotels().subscribe((data: Hotel[]) => {
      this.hotels = data;
    });
  }

  // getTicketById(ticketId: number): void {
  //   this.Avia.getTickets_by_id(ticketId).subscribe((data: Ticket) => {
  //     // Handle the data as needed
  //   });
  //}
} 
