import {Component, OnInit} from '@angular/core';

import {Product, products} from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent  {
  products = products;
  share(a:number) {
    window.open(`https://api.whatsapp.com/send/?phone=77073130212&text=Здравствуйте, я бы хотела приобрести этот продукт ${products[a - 1]['url']}&type=phone_number&app_absent=0`);
  }
  like(a:number){
    this.products[a]['likes']++;
  }
  onProductRemove(a:Product){
    this.products = this.products.filter((x) => x !== a);
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale')
  }
  
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/