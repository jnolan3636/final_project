import { Component, OnInit } from '@angular/core';
import { List } from '../eo';
import { EOAPIService } from '../eo-api.service';

@Component({
  selector: 'app-eo',
  templateUrl: './eo.component.html',
  styleUrls: ['./eo.component.css']
})
export class EoComponent implements OnInit {
  
  public eoName : string;
  public show : boolean = false;
  public buttonName:any = 'Show Properties';
 
  constructor(public EOAPI: EOAPIService) { }

  ngOnInit() {
  this.EOAPI.getOil();
  }

  toggle() {
    this.show = !this.show;
    if(this.show)
      this.buttonName = "Hide Properties";
    else
      this.buttonName = "Show Properties";
  }
}
