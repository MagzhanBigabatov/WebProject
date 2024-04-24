import { Component } from '@angular/core';
import { Avia } from '../Avia.service';
import { registr_login } from '../module';
import { Router } from '@angular/router';



@Component({
  selector: 'app-registr',
  templateUrl: './registr.component.html',
  styleUrls: ['./registr.component.css']
})
export class RegistrComponent {
  accounts: registr_login[] = [];

  newNickName: String = "";
  newMail: String = "";
  newPassword: String = "";
  newPasswordAgain: String = "";
  
  constructor(private regLoginService: Avia, private router: Router) {}

  ngOnInit() : void {
    this.regLoginService.getAccount().subscribe((data: registr_login[]) => {
      this.accounts = data;
    });
  }

  addAccount() {

    if (this.newPassword !== this.newPasswordAgain) {
      alert("Passwords do not match");
      return;
    }

    this.regLoginService.createAccount(
      this.newNickName, this.newMail, this.newPassword
    ).subscribe((data) => {
      this.accounts.push(data);
      this.newNickName = "";
      this.newMail = "";
      this.newPassword = "";

      alert("Account created");
      this.router.navigate(['/Login']);
    });
  }
}
