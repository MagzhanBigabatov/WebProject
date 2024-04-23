import { Component } from '@angular/core';
import { Avia } from '../Avia.service';
import { registr_login } from '../module';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  accounts: registr_login[] = [];

  newNickName: string = "";
  newPassword: string = "";
  
  constructor(private regLoginService: Avia, private router: Router) {}

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
      // Перенаправление на главную страницу
      this.router.navigate(['']);
    } else {
      alert('Incorrect nickname or password');
    }
  }
}
