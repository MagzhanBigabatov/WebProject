// import { Component, OnInit } from '@angular/core';
// import { Avia } from '../Avia.service';
// import { registr_login } from '../module';
// import { CurrentUserService } from '../current-user.service';
// import { NgIf, NgFor } from '@angular/common';

// @Component({

//   selector: 'app-main',
//   templateUrl: './main.component.html',
//   styleUrls: ['./main.component.css'],
  
// })
// export class MainComponent implements OnInit{
//   id: number = 0;
//   userName: string = "";
//   userPassword: string = "";
//   isUserManager: boolean = false;
//   constructor(private currentUserService: CurrentUserService){}

//   ngOnInit(): void {
//     this.currentUserService.CurrentUser$.subscribe((user) =>{
//       this.id = user.id;
//       this.userName = user.nickname;
//       this.userPassword = user.password;
//       this.isUserManager = user.manager;
//       //console.log(user.id, user.password);
//     })  

//   }

// }

import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '../current-user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  id: number = 0;
  userName: string = '';
  userPassword: string = '';
  isUserManager: boolean = false;

  constructor(private currentUserService: CurrentUserService) {}

  ngOnInit(): void {

    const currentUser = localStorage.getItem('currentUser');
    console.log(currentUser)
    if (currentUser) {
      const user = JSON.parse(currentUser);
      this.id = user.id;
      this.userName = user.nickname;
      this.userPassword = user.password;
      this.isUserManager = user.manager;
    }
  }
  logout(): void {
    localStorage.removeItem('currentUser');
    this.id = 0;
    this.userName = '';
    this.userPassword = '';
    this.isUserManager = false;
  }
}

