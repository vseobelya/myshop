import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import {Good} from './shared/good'

@Injectable({
  providedIn: 'root'
})
export class GetgoodsService {

  constructor(private http: HttpClient) { }

  getGoods(): Observable<Good[]> {
       return this.http.get<Good[]>('php/getgoods.php', {responseType: 'json'})
       .catch((err, caught) => Observable.of(''));
  }
}
