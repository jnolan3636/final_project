import { Component, OnInit } from '@angular/core';
import { EOAPIService } from '../eo-api.service';
import { List } from '../eo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  randomTerm : List [] = [];

  constructor(public EOAPI: EOAPIService) { }

  ngOnInit(): void {
  }

}
