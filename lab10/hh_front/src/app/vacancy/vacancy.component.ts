import { Component } from '@angular/core';
import { Vacancy } from '../models';
import { VacancyService } from '../vacancy.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent {
  vacancies: Vacancy[] = [];
  id: number | undefined;
  newVacancy: string = '';
  newName: string = '';
  constructor(private route: ActivatedRoute, private vacancyService: VacancyService){}

  v: Vacancy| undefined;

  

  ngOnInit(): void{
    
    this.id = Number(this.route.snapshot.paramMap.get('company_id'));
    this.vacancyService.getVacanciesCompanies(this.id).subscribe((vacancies) => this.vacancies = vacancies);
  }

}
