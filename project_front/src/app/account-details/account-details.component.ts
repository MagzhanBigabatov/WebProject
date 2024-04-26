import { Component, OnInit } from '@angular/core';
import { Avia } from '../Avia.service';
import { BuyTicket, Ticket, registr_login } from '../module';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
  user: registr_login[] =[];
  buytic: BuyTicket[] = [];
  tickets: Ticket[]=[];
  

  constructor(private dataService: Avia) { }

  ngOnInit(): void {
    this.loadBuytic();
    this.loadTickets();
    this.loadUserData();
  }

  loadUserData() {
    const userData = localStorage.getItem('currentUser');
    if (userData) {
      this.user = JSON.parse(userData);
    }
  }

  loadBuytic() {
    this.dataService.getBuytic().subscribe((buytic: BuyTicket[]) => {
      this.buytic = buytic;
    });
  }

  loadTickets() {
    const userData = localStorage.getItem('currentUser');
    if (userData) {
      const user = JSON.parse(userData);
      const userId = user.id;
      this.dataService.getBuyticID(userId).subscribe((tickets: Ticket[]) => {
        
        this.tickets = tickets;
        console.log(tickets)
      });
    }
  }
  
  
// loadTickets() {
//   this.dataService.getTicket().subscribe((tickets: Ticket[]) => {
//           this.tickets = tickets.filter(ticket => (ticket.id));
//       });
// }
}
