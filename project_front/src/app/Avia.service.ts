import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { registr_login, Ticket } from './module';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
  export class Avia {
  
    BASE_URL = 'http://127.0.0.1:8000';
    accounts: registr_login[] = [];
    tickets: Ticket[]= [];
  
    constructor(private client: HttpClient) { }
  
    getAccount(): Observable<registr_login[]> {
      return this.client.get<registr_login[]>(`${this.BASE_URL}/aviato/Account/`)
        .pipe(
          tap(accounts => this.accounts = accounts)
        );
    }
  
    createAccount(nickName: String, Mail: String, Password: String): Observable<registr_login>{
        return this.client.post<registr_login>(
            `${this.BASE_URL}/aviato/Account/`,
            {
                nickname: nickName,
                mail: Mail,
                password: Password,
            }
        )
      }
  
    checkCredentials(nickname: string, password: string): boolean {
      const account = this.accounts.find((acc: registr_login) => acc.nickname === nickname && acc.password === password);
      return !!account;
    }



    //tickets
    getTicket(): Observable<Ticket[]>{
      return this.client.get<Ticket[]>(`${this.BASE_URL}/aviato/Tickets/`).pipe(
        tap(tickets => this.tickets = tickets)
      );
    }

    // getTickets_by_id():
  
  }





// getCompanies(): Observable<Company[]> {
//     return this.client.get<Company[]>(`${this.BASE_URL}/api/company/`);
//   }
  
//   createCompany(company_Id: Number, companyName: String, companyDesc: String, companyCity: String, CompanyAddress: String): Observable<Company> {
//     return this.client.post<Company>(
//         `${this.BASE_URL}/api/company/`,
//         {
//           id: company_Id,
//           name: companyName, 
//           description: companyDesc,
//           city: companyCity, 
//           address: CompanyAddress
//         }
//       );
//   }

//   getCompany_id(company_id: number) {
//     this.company_id = company_id
//   }


//   deleteCompany(companyId: number): Observable<any> {
//     return this.client.delete(
//       `${this.BASE_URL}/api/company/${companyId}/`
//     )
//   }

//   vacanciesByCompany(): Observable<Vacancy[]> {
//     return this.client.get<Vacancy[]>(`http://127.0.0.1:8000/api/company/${this.company_id}/vacancy`)
//   }
