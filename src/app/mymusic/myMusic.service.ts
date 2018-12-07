import { Injectable } from '@angular/core';
import { MyMusicModel } from './myMusic.model';

import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';


@Injectable()



export class MyMusicService {

private musicUrl = 'https://ngmusicdb.herokuapp.com/api/getMusic';

constructor(private _http: Http) {}

getMusic(): Observable<MyMusicModel[]> {
  return this._http.get(this.musicUrl)
  .map((_response: Response) => <MyMusicModel>_response.json())
  .catch(this.handleError);
}

handleError(error: Response) {
  return Observable.throw(error.statusText);
}

}
