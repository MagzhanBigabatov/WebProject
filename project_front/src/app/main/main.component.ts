import { Component, OnInit } from '@angular/core';
import { Avia } from '../Avia.service';
import { registr_login } from '../module';
import { CurrentUserService } from '../current-user.service';
import { NgIf, NgFor } from '@angular/common';

@Component({

  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  
})
export class MainComponent implements OnInit{
  userName: string = "";
  userPassword: string = "";
  isUserManager: boolean = false;
  constructor(private currentUserService: CurrentUserService){}

  ngOnInit(): void {
    this.currentUserService.CurrentUser$.subscribe((user) =>{
      this.userName = user.nickname;
      this.userPassword = user.password;
      this.isUserManager = user.manager;
      // console.log(user.nickName, user.password);
    })  

  }

}
