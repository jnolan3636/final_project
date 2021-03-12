import { Injectable } from '@angular/core';
import { List } from './eo';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })

export class EOAPIService {
  
  public essentialOils: List[] = [];
  public symptoms: List[];
  public url: string = 'http://localhost:3000/api/';
  // public url: string = 'https://group-1-final-project-esense.herokuapp.com/api/';
  eoSearch: List[] = [];
  sympSearch: List[] = [];
  subSearch: List[] = [];
  filter: string = '';

  constructor(private http: HttpClient) {
    this.essentialOils = [];
    this.symptoms = [];
    this.subSearch = [];
  }

//to get EOs by Name
  getEO(eoName?: string) {
    if (eoName) { 
    this.http.get(this.url + `eo/${eoName}`).subscribe(
      (resp:any) => {
        this.eoSearch = resp
      },
      (error) => {
        console.log(error);
        } //else bring back all or top 3 EOs
      )
    }
  }
//to get ALL oils
  getOil() {
    this.essentialOils = [];
    this.http.get(this.url + 'eo').subscribe(
      (data) => {
        for (const key in data) {
          if (Object.prototype.hasOwnProperty.call(data, key)) {
            const essentialOil = data[key];
            this.essentialOils.push(essentialOil);
          }
        }
      },
      (error) => {
        console.error('there is an error');
      }
    );
  }
//To get symptom by Name
  getSymptom(sympName?: string) {
    if (sympName) { 
    this.http.get(this.url + `symptoms/${sympName}`).subscribe(
      (resp:any) => {
        this.sympSearch = resp
      },
      (error) => {
        console.log(error);
        }
        //add else to return all symptoms
      )
    }
  }
<<<<<<< HEAD
  getSubSymptom(subSympName?: string) {
    if (subSympName) { 
    this.http.get(this.url + `symptoms/${subSympName}`).subscribe(
      (resp:any) => {
        this.sympSearch = resp
=======
//To get sub symptom by symptom name
  getSubSymptom(sympName?: string) {
    if (sympName) { 
    this.http.get(this.url + `subsymptoms/${sympName}`).subscribe(
      (resp:any) => {
        this.subSearch = resp
        console.log("These are the sub symps: ", resp)
>>>>>>> master
      },
      (error) => {
        console.log(error);
        }
<<<<<<< HEAD
        
=======
        //add else to return all subsymptoms
>>>>>>> master
      )
    }
  }
}
