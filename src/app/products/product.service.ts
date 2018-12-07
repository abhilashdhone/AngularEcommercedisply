import { Injectable } from '@angular/core';
import { Productmodel } from './product.model';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class ProductService {

  private _productUrl = 'https://ngapi4.herokuapp.com/api/getProducts';

  constructor( private _http: Http) {}

  getProducts(): Observable<Productmodel[]> {
    return this._http.get(this._productUrl)
    .map((response: Response) => <Productmodel[]>response.json())
    .catch(this.myhandleError);
  }

  myhandleError( error: Response) {
    return Observable.throw(error.statusText);
  }
}
