import { Component, OnInit } from '@angular/core';
import { EOAPIService } from '../eo-api.service';
import { List } from '../eo';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  randomTerm : List [] = [];

  constructor(public EOAPI: EOAPIService, private _Activatedroute:ActivatedRoute) {
    let result=this._Activatedroute.snapshot.paramMap.get("eo_name");
    console.log(result);
    this.EOAPI.getEO(result);
  }

  ngOnInit(): void {
  }

}
