import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BuyTicket, Hotel, registr_login, Ticket, User } from './module';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { Time } from '@angular/common';
import { tick } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class Avia {

  BASE_URL = 'http://127.0.0.1:8000';
  accounts: registr_login[] = [];
  tickets: Ticket[] = [];
  hotels: Hotel[] = [];
  buytic: BuyTicket[] = [];

  constructor(private client: HttpClient) { }

  getAccount(): Observable<registr_login[]> {
    return this.client.get<registr_login[]>(`${this.BASE_URL}/aviato/Account/`)
      .pipe(
        tap(accounts => this.accounts = accounts)
      );
  }


  getAccountById(id: number): Observable<registr_login> {
    return this.client.get<registr_login>(`${this.BASE_URL}/accounts/${id}`);
  }

 
  checkCredentials(nickname: string, password: string): any  {
    const account = this.accounts.find((acc: registr_login) => acc.nickname === nickname && acc.password === password);
    return account;
  }
  check(ticId: number): boolean {
    const tic = this.tickets.find(tic => tic.id === ticId);
    return tic !== undefined;
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




  //tickets
  checkTickets(city1: string, city2: string, depar_date: Date): Observable<Ticket[]> {
    return this.getTicket().pipe(
      map(tickets => tickets.filter(tic => tic.city1 === city1 && tic.city2 === city2 && tic.depar_date === depar_date))
    );
  }


  getTicket(): Observable<Ticket[]> {
    return this.client.get<Ticket[]>(`${this.BASE_URL}/aviato/Tickets/`).pipe(
      tap(tickets => this.tickets = tickets)
    );
  }
  getTicketId(ticId: number[]): Observable<Ticket[]> {
    return this.client.get<Ticket[]>(`${this.BASE_URL}/aviato/Tickets/${ticId}/`).pipe(
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


  getBuytic(): Observable<BuyTicket[]>{
    return this.client.get<BuyTicket[]>(`${this.BASE_URL}/aviato/details/`).pipe(
      tap(buytic => this.buytic = buytic)
    );
  }
  getBuyticID(perId: number): Observable<Ticket[]>{
    return this.client.get<Ticket[]>(`${this.BASE_URL}/aviato/Account/${perId}/detail/tickets`)
  }


  createBuyTicket(
    Per_id: number,
    Tikets_id: number| null,
    BackTic: number| null,
    TicNUM: number| null,
    hotelId: number| null,
    HotelNUM: number| null
    ): Observable<any> {
        return this.client.post<any>(
            `${this.BASE_URL}/aviato/details/`,
            {
                Per_id: Per_id,
                Tikets_id: Tikets_id,
                BackTic: BackTic,
                TicNUM: TicNUM,
                hotelId: hotelId,
                HotelNUM: HotelNUM
            }
        );
    }

    updateAccount(
      ID: number, 
      Per_id: number | null = null,
      ticketId: number | null = null, 
      backTicketId: number | null = null, 
      numOfTickets: number | 0, 
      hotelId: number | null = null, 
      numOfRooms: number | 0): Observable<BuyTicket> {
      console.log(ID)
      return this.client.put<BuyTicket>(
          `${this.BASE_URL}/aviato/details/${ID}/`,
          {
              Per_id: Per_id,
              Tikets_id: ticketId,
              BackTic: backTicketId,
              hotelId: hotelId,
          }
      );
    }

    
  }
  

