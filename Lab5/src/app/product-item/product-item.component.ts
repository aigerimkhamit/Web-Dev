import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {Product} from "../products";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit{

  @Input() product: Product | undefined;
  @Output() remove = new EventEmitter<Product>();
  ngOnInit(): void {}

  removeProduct(){
    this.remove.emit(this.product);
  }
}
