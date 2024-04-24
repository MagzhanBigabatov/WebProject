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
  constructor(private currentUserService: CurrentUserService){}

  ngOnInit(): void {
    this.currentUserService.CurrentUser$.subscribe((user) =>{
      this.userName = user.nickName;
      // console.log(user.nickName, user.password);
    })  

  }

}
