import { Component, Input, OnInit } from '@angular/core';
import { EOAPIService } from '../eo-api.service';
import { List } from '../eo';

@Component({
  selector: 'app-symptom-list',
  templateUrl: './symptom-list.component.html',
  styleUrls: ['./symptom-list.component.css']
})
export class SymptomListComponent implements OnInit {
  public essentialOils: List[];
  public subSearch: List[];
  public sympName : string;

  constructor(public EOAPI: EOAPIService) { }

  @Input() eoName;

  ngOnInit(): void {
    this.EOAPI.getEOSymptom();
  }

}
