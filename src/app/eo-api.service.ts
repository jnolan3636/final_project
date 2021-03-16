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
//To get symptoms by EO name
  getEOSymptom(eoName?: string) {
    console.log("we are here")
    if (eoName) { 
    this.http.get(this.url + `symptom/${eoName}`).subscribe(
      (resp:any) => {
      
        this.sympSearch = resp
        console.log(this.sympSearch)
      },
      (error) => {
        console.log(error);
        }
        //add else to return all subsymptoms
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
//To get sub symptom by symptom name
  getSubSymptom(sympName?: string) {
    if (sympName) { 
    this.http.get(this.url + `subsymptoms/${sympName}`).subscribe(
      (resp:any) => {
        this.subSearch = resp
      },
      (error) => {
        console.log(error);
        }
        //add else to return all subsymptoms
      )
    }
  }

  //To get EO by Symptom name
  getSympEO(sympName?: string) {
  
    if (sympName) { 
    this.http.get(this.url + `eobysymp/${sympName}`).subscribe(
      (resp:any) => {
      
        this.eoSearch = resp
        console.log(this.eoSearch)
      },
      (error) => {
        console.log(error);
        }
        //add else to return all subsymptoms
      )
    }
  }

    //To get EO by SubSymptom name
    getSubEO(subSympName?: string) {
  
      if (subSympName) { 
      this.http.get(this.url + `eobysub/${subSympName}`).subscribe(
        (resp:any) => {
        
          this.eoSearch = resp
          console.log(this.eoSearch)
        },
        (error) => {
          console.log(error);
          }
          //add else to return all subsymptoms
        )
      }
    }
}
