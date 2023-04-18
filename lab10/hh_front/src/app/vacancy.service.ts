import { Injectable } from '@angular/core';
import { Vacancy } from './models';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  BASE_URL = 'http://127.0.0.1:8000'
  company_id: number | undefined;

  constructor(private client: HttpClient) {}
  ngOnInit(): void{}



  getVacanciesCompanies(company_id:number): Observable<Vacancy[]>{
    this.company_id = company_id;
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/api/company/${company_id}/vacancy`)
  }
}
