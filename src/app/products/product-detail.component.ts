import { Component, OnInit } from '@angular/core';

// we need activated route for getting id as soon as this component is actiavted
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html'
})

export class ProductDetailComponent implements OnInit {
  title: String = 'Product Title';
  id: number;
  name: String;
  des: String;
  image: String;

// initialised activated route in _route

  constructor( private _route: ActivatedRoute, private _router: Router ) {}

  ngOnInit(): void {

// snapshot is the method to grab param; in app module the name of parameter is given id so here also we have to
// same name i.e. id
    this.id = this._route.snapshot.params['id'];

    this._route
        .queryParams
        .subscribe((params) => {
          this.name = params ['name'],
          this.des = params ['desc'],
          this.image = params ['img'];
        });
  }

  onBack(): void {

    // as we can simply say navigate is one of the router functionalities which help us top get to that page
    // in here its the products page.
    this._router.navigate(['/products']);
  }
}


