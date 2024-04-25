import { Component, OnInit } from '@angular/core';
import { registr_login } from '../module';
import { Avia } from '../Avia.service';
import { LoginComponent } from '../login/login.component';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  accounts: registr_login[] = [];
  account: registr_login | null = null; // Declare 'account' property

  constructor(private Avia: Avia) { }

  ngOnInit(): void {
    this.getTickets();
  }

  

getTickets(): void {
    const accountId = localStorage.getItem('accountId');
    const nickname = localStorage.getItem('nickname');
    if (nickname) {
        this.Avia.getAccountByNickname(nickname).subscribe((data: registr_login) => {
            this.account = data; // Assign the received data
      })
    }
    }
  }
