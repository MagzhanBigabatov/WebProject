import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel, registr_login, Ticket } from './module';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Time } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class Avia {

  BASE_URL = 'http://127.0.0.1:8000';
  accounts: registr_login[] = [];
  tickets: Ticket[] = [];
  hotels: Hotel[] = [];

  constructor(private client: HttpClient) { }

  getAccount(): Observable<registr_login[]> {
    return this.client.get<registr_login[]>(`${this.BASE_URL}/aviato/Account/`)
      .pipe(
        tap(accounts => this.accounts = accounts)
      );
  }

  getAccountByNickname(nickname: string): Observable<registr_login> {
    return this.client.get<registr_login>(`${this.BASE_URL}/accounts/?nickname=${nickname}`);
  }
  getAccountById(id: number): Observable<registr_login> {
    return this.client.get<registr_login>(`${this.BASE_URL}/accounts/${id}`);
  }

  createAccount(nickName: String, Mail: String, Password: String): Observable<registr_login> {
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
  check(ticId: number): boolean {
    const tic = this.tickets.find(tic => tic.id === ticId);
    return tic !== undefined;
  }

  //tickets
  getTicket(): Observable<Ticket[]> {
    return this.client.get<Ticket[]>(`${this.BASE_URL}/aviato/Tickets/`).pipe(
      tap(tickets => this.tickets = tickets)
    );
  }

  createTickets(
    city1: string,
    city2: string,
    cost: number,
    company: string,
    depar_date: string,
    depar_time: string,
    arrival_date: string,
    arrival_time: string,
    count: number
  ): Observable<Ticket> {
    return this.client.post<Ticket>(
      `${this.BASE_URL}/aviato/Tickets/`,
      {
        city1: city1,
        city2: city2,
        cost: cost,
        company: company,
        depar_date: depar_date,
        depar_time: depar_time,
        arrival_date: arrival_date,
        arrival_time: arrival_time,
        count: count
      }
    );
  }

  updateTicket(
    newticId: number, 
    city1: string,
    city2: string,
    cost: number,
    company: string,
    depar_date: string,
    depar_time: string,
    arrival_date: string,
    arrival_time: string,
    count: number
  ): Observable<Ticket> {
    return this.client.put<Ticket>(
      `${this.BASE_URL}/aviato/Tickets/${newticId}/`,
      {
        city1: city1,
        city2: city2,
        cost: cost,
        company: company,
        depar_date: depar_date,
        depar_time: depar_time,
        arrival_date: arrival_date,
        arrival_time: arrival_time,
        count: count
      }
    );
  }
  
  deleteTicket(ticId: number): Observable<void> {
    return this.client.delete<void>(`${this.BASE_URL}/aviato/Tickets/${ticId}/`);
  }



  private formatDate(date: Date | null): string {
    if (!date) {
      return '';
    }
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
  }
  
  private formatTime(time: Date | null): string {
    if (!time) {
      return '';
    }
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
  

  getHotels(): Observable<Hotel[]> {
    return this.client.get<Hotel[]>(`${this.BASE_URL}/aviato/Hotels/`).pipe(
      tap(hotels => this.hotels = hotels)
    );
  }

}
