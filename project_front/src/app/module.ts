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

