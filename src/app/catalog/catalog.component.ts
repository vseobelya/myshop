import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import {GetgoodsService} from '../getgoods.service';

import {Good} from '../shared/good'

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  goods: any;

  constructor(private ggs: GetgoodsService) { }

  ngOnInit(): void {
    this.goods = this.ggs.getGoods();
  }

}
