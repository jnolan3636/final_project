import { Component, OnInit } from '@angular/core';
import { EOAPIService } from '../eo-api.service';
import { List } from '../eo';

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.css']
})
export class SymptomsComponent implements OnInit {
  public essentialOils: List[];
  public subSearch: List[];
  public sympName : string;
  public selectedValue : string = '';
  public subSymp: boolean;
  public subSympName: string = '';
  public subName: string = '';
  constructor(public EOAPI: EOAPIService) { }

  ngOnInit(): void {
    this.EOAPI.getAllSymp();
  }
    

}
