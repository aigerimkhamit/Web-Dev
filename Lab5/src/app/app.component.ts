import {Component, OnInit} from '@angular/core';
import {Product, products} from "./products";
import {filter} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{

  products = products;

  categories = [
    {
      id: 1,
      name: "Cosmetics",
      products: products.filter(product => product.category === 'cosmetics'),
      isClicked:false,
    },
    {
      id: 2,
      name: "Laptops",
      products: products.filter(product => product.category === 'laptops'),
      isClicked:false,
    },
    {
      id: 3,
      name: "Coffee machines",
      products: products.filter(product => product.category === 'coffee machines'),
      isClicked:false,
    },
    {
      id: 4,
      name: "Electronic books",
      products: products.filter(product => product.category === 'electronic books'),
      isClicked: false,
    },

  ];
  show(a:number){
    this.categories[a-1]['isClicked'] = !this.categories[a-1]['isClicked'];
  }


}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/