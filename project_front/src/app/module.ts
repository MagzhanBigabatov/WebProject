import { Time } from "@angular/common";

export interface Company{
    id: number;
    name: string;
    description: string;
    city: string;
    address: string;
}

export interface Vacancy{
    id: number;
    name: string;
    description: string;
    salary: string;
    company: string;
    raiting: number;
}

export interface registr_login{
    id: number;
    nickname: string;
    mail: string;
    password: string;
    manager: boolean;
}

export interface Ticket {
    id: number;
    city1: string;
    city2: string;
    cost: number;
    company: string;
    depar_date:Date;
    depar_time: Time;
    Arrival_date: Date;
    Arrival_time: Time;
    number: number;
}
export interface Hotel {
    id: number;
    city: string;
    name: string;
    cost: number;
    mini_descrip: string;
    description: string;
    raiting: number;
    arrival_date: string; // Assuming date format is string for simplicity
    date_departure: string; // Assuming date format is string for simplicity
    url: string;
  }

  export interface HotelNum {
    id: number;
    name: string;
    description: string;
    cost: number;
    hotel: Hotel;
  }

  export interface BuyTicket {
    id: number;
    Per_id: number;
    Tikets_id: number;
    BackTic: number; 
    TicNUM: number;
    hotelId: number; 
    HotelNUM: number;
  }

  export interface User {
    nickName: string;
    password: string;
  }
