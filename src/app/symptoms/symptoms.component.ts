import { Component, OnInit } from '@angular/core';
import { EOAPIService } from '../eo-api.service';

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.css']
})
export class SymptomsComponent implements OnInit {

  constructor(public EOAPI: EOAPIService) { }

  ngOnInit(): void {
  }

}
