import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-productscomp',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  maintitle = 'Products';
  img: Boolean = false;
  filtertext: any;
  message: any;
  products: any[];
  errorText: string;

 constructor(private _productservice: ProductService) {}

 ngOnInit() {
    this._productservice.getProducts()
    .subscribe((mydata) => this.products = mydata,
  (myerr) => this.errorText = myerr);
 }

  toggleimg(): void {
    this.img = !this.img;
  }
  messageReceiver($event) {
    this.message = $event;
  }
}
