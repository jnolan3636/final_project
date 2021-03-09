import { Component, OnInit } from '@angular/core';
import { List } from '../eo';
import { EOAPIService } from '../eo-api.service';

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.css']
})
export class SymptomsComponent implements OnInit {
  public essentialOils: List[];

  constructor(public EOAPIService: EOAPIService) { }

  ngOnInit(): void {
  }

}
