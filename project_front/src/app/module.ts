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
}

export interface Ticket {
    id: number;
    city1: string;
    city2: string;
    cost: number;
    company: string;
    depar_date: Date | null;
    depar_time: string | null;
    arrival_date: Date | null;
    arrival_time: string | null;
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
    Per_id: registr_login; // Assuming Per_id is user id
    Tikets_id: Ticket; // Assuming Tikets_id is ticket id
    BackTic: Ticket; // Assuming BackTic is ticket id
    TicNUM: number;
    hotelId: HotelNum; // Assuming hotelId is hotel id
    HotelNUM: number;
  }
