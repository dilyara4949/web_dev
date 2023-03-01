import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../products';
// import ()

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit{
  ngOnInit(): void {}


  @Input() item: Product;
  @Input() cur_category: string | undefined;
  @Output() remove = new EventEmitter();
  visible = true;

  constructor() {
    this.item = new Product;
    this.visible = true;
  }
  liked(){
    this.item.likes +=1;
  }
  removeItem() {
    this.visible = false;
  }
}
