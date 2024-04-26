import { Component, OnInit } from '@angular/core';
import { Avia } from '../Avia.service';
import { Ticket, registr_login, BuyTicket } from '../module';
import { CurrentUserService } from '../current-user.service';
import { switchMap, map } from 'rxjs/operators';
import { empty } from 'rxjs';
import { Observable } from 'rxjs';
import { throwError, of } from 'rxjs';

@Component({
  selector: 'app-air-passage',
  templateUrl: './air-passage.component.html',
  styleUrls: ['./air-passage.component.css']
})
export class AirPassageComponent implements OnInit {
  tickets: Ticket[] = [];
  buytic: BuyTicket[] = [];
  selectedTicket: Ticket | null = null;

  id: number = 0;
  city1: string = '';
  city2: string = '';
  depar_date: any;
  newNum: number = 0;

  constructor(private UserService: CurrentUserService, private aviaService: Avia) { }

  ngOnInit(): void {
    this.loadTickets();
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

  
  buyTicket(ticketId: number): void {
    console.log('Buy ticket clicked for ticket ID:', ticketId);

    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      const user = JSON.parse(currentUser);
      const userId = user.id;

      this.aviaService.getBuytic().subscribe((buytic: BuyTicket[]) => {
        const account = buytic.find(buy => buy.Per_id === userId);
        if (account) {
          console.log('Found account with ID:', account.id);
          this.aviaService.updateAccount(account.id, userId, ticketId, null, 0, null, 0).subscribe(() => {
            console.log('Account updated successfully');
          }, (error) => {
            console.error('Error updating account:', error);
          });
        } else {
          console.error('Account not found');
        }
      });
    } else {
      console.error('User not logged in');
    }
  }

  
  
  
  
  
  
}
