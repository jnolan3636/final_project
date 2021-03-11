import { Component, OnInit } from '@angular/core';
import { List } from '../eo';
import { EOAPIService } from '../eo-api.service';

@Component({
  selector: 'app-eo',
  templateUrl: './eo.component.html',
  styleUrls: ['./eo.component.css']
})
export class EoComponent implements OnInit {
  constructor(public EOAPI: EOAPIService) { }
  public eoName : string;

  ngOnInit() {
  this.EOAPI.getOil();
  }
}
