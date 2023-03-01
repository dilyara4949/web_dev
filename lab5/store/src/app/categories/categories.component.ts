import { Component, OnInit} from '@angular/core';
import { categories } from '../category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  categories = [...categories];
  visible = false;

  toggleCategoryList() {
    this.visible = !this.visible;
  }
  // cur_cat = '';
  // change_cat(cat: string) {
  //   this.cur_cat = cat;
  // }

  // export cur_cat string{

  // }
}
