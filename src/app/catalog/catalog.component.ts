import { Component, OnInit } from '@angular/core';

import {GetgoodsService} from '../getgoods.service';

import {Good} from '../shared/good'

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
