
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// this one is for seggregation, different module was created at this point to reduce size of this file.
import { ProductModule } from './products/product.module';

import { AppComponent } from './app.component';
import { MymusicComponent } from './mymusic/mymusic.component';
import { OrderComponent } from './orders/orders.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './shared/pageNotfound.component';





import { ProductService } from './products/product.service';
import { MyMusicService } from './mymusic/myMusic.service';


@NgModule ({

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot ([
      { path: 'home', component: HomeComponent },
      { path: 'orders', component: OrderComponent },
      { path: 'music', component: MymusicComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', component: PagenotfoundComponent  }
    ]),
    ProductModule
  ],

  declarations: [
    AppComponent,
    MymusicComponent,
    OrderComponent,
    HomeComponent,
    PagenotfoundComponent
  ],

  bootstrap: [
    AppComponent
  ],

  providers: [
    ProductService,
    MyMusicService
  ]

})

export class AppModule {}
