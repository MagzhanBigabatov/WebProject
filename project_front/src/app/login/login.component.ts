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
  
  login() {
    const isValidCredentials = this.regLoginService.checkCredentials(this.newNickName, this.newPassword);
    if (isValidCredentials) {
<<<<<<< HEAD
      // Получение учетной записи по nickname
      const account = this.accounts.find(a => a.nickname === this.newNickName);
      if (account) {
        // Сохранение id учетной записи в localStorage
        localStorage.setItem('nickname', this.newNickName);
      }

=======
      const user:User = {
        nickName: this.newNickName,
        password: this.newPassword
      };
      this.currentUserService.changeCurrentUser(user);
>>>>>>> 959e3e67e4388668198fb0ee12f3fb61737166f6
      // Перенаправление на главную страницу
      this.router.navigate(['']);
    } else {
      alert('Incorrect nickname or password');
    }
  }

}
