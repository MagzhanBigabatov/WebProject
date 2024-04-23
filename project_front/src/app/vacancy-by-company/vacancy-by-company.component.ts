import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Vacancy } from '../module';

@Component({
  selector: 'app-vacancy-by-company',
  templateUrl: './vacancy-by-company.component.html',
  styleUrls: ['./vacancy-by-company.component.css']
})
export class VacancyByCompanyComponent implements OnInit{
  vacancies: Vacancy[] = []

  constructor(private vacancyService: CompanyService) {}

  ngOnInit(): void {
    this.vacancyService.vacanciesByCompany().subscribe((data: Vacancy[]) =>{
      this.vacancies = data
    })
  }
}

