import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs';

import {Good} from './shared/good'

@Injectable({
  providedIn: 'root'
})
export class GetgoodsService {

  constructor(private http: HttpClient) { }

  getGoods(): Observable<Good[]> {
       return this.http.get<Good[]>('php/getgoods.php', {responseType: 'json'});
  }
}
