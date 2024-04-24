import { Component, OnInit } from '@angular/core';
import { registr_login } from '../module';
import { Avia } from '../Avia.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  accounts: registr_login[] = [];

   
  constructor (private Avia: Avia){}
  ngOnInit() : void {
    this.getTickets()
  }



  getTickets(): void {
    const accountId = localStorage.getItem('accountId');
    if (accountId) {
      this.Avia.getAccountById(accountId).subscribe((data: registr_login) => {
        // Присваиваем данные учетной записи переменной account
        this.account = data;
      });
    }
  }
}