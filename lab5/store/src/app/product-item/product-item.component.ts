import { Component, OnInit, Input } from '@angular/core';
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

  constructor() {
    this.item = new Product;
  }
}
