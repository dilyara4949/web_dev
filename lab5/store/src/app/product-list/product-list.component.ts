import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { url } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit{
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  products = [...products];

  share() {
    window.alert('The product has been shared!');
  }
  
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  currentUrl : string | undefined;
  cur_category : string | undefined;

  constructor(private route: ActivatedRoute) {
    this.route.url.subscribe(url => {
      this.currentUrl = url.join('/');
      // this.cur_category = 
      this.cur_category = this.currentUrl.split('/').pop(); 
    });
  }
  


}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/