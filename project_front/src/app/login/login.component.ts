import { Component } from '@angular/core';
import { Avia } from '../Avia.service';
import { registr_login } from '../module';
import { Router } from '@angular/router';
import { CurrentUserService } from '../current-user.service';
import { User } from '../module';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  accounts: registr_login[] = [];

  newNickName: string = "";
  newPassword: string = "";
  
  constructor(
    private regLoginService: Avia, 
    private router: Router,
    private readonly currentUserService: CurrentUserService
  ) {}

  ngOnInit() : void {
    this.regLoginService.getAccount().subscribe((data: registr_login[]) => {
      this.accounts = data;
    });
  }

  checkCredentials(nickname: string, password: string): boolean {
    const account = this.accounts.find(acc => acc.nickname === nickname && acc.password === password);
    return !!account;
  }
  
  // login() {
  //   const user: any = this.regLoginService.checkCredentials(this.newNickName, this.newPassword);
  //   if (!!user) {
  //     //console.log(user)
  //     this.currentUserService.changeCurrentUser(user);

  //     // Перенаправление на главную страницу
  //     this.router.navigate(['']);
  //   } else {
  //     alert('Incorrect nickname or password');
  //   }
  // }
  login() {
    const user: any = this.regLoginService.checkCredentials(this.newNickName, this.newPassword);
    if (!!user) {
      // Сохраняем данные пользователя в LocalStorage
      localStorage.setItem('currentUser', JSON.stringify(user));
      // window.location.reload();
      this.router.navigate(['']); 
    } else {
      alert('Incorrect nickname or password');
    }
  }
  

}
