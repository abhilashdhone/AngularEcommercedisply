
import { NgModule } from '@angular/core';

// whenever we make additional module other than main app.module, weneed to import this commonmodule here.


import { RouterModule } from '@angular/router';

import { ProductComponent } from './product.component';
import { MyTaxPipe } from './taxPipe.pipe';
import { SearchBarPipe } from './searchBar.pipe';
import { ProductDetailComponent } from './product-detail.component';

// we imported shared module which has everything in it which we will need in other modules.
import { SharedModule } from '../shared/shared.module';


@NgModule ({

  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductComponent },
      { path: 'products/:id', component: ProductDetailComponent },
    ]),
    SharedModule
  ],

  declarations: [
    ProductComponent,
    MyTaxPipe,
    SearchBarPipe,
    ProductDetailComponent,
  ],

  providers: []

})

export class ProductModule { }
