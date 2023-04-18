import { Component, OnInit } from '@angular/core';
import { CompanyService } from './company.service';
import { Company } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  
  title = 'hh_front';
  show : boolean = false;
  companies: Company[] = [];
  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.getCompanies()
  }


  getCompanies() {
    this.companyService.getCompanies().subscribe((companies) => {
      this.companies = companies;
    });
  }

  show_vacancies(){
    this.show = !this.show;
  }
  
}
