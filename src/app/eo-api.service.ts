import { Injectable } from '@angular/core';
import { List } from './eo';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })

export class EOAPIService {
  
  public essentialOils: List[] = [];
  public symptoms: List[];
  public url: string = 'http://localhost:3000/api/';
  eoSearch: List[] = [];
  sympSearch: List[] = [];
  filter: string = '';

  constructor(private http: HttpClient) {
    this.essentialOils = [];
    this.symptoms = [];
  }
  // displayedEO: List[] = [...this.essentialOils];
  // getFilteredEO(): List[] {
  //   return this.essentialOils.filter((essentialOils) => {
  //     // convert the items.task to lowercase
  //     const taskLower = eo_name.task.toLowerCase();
  //     // convert the filter input to lowercase
  //     const filterLower = this.filter.toLowerCase();
  //     // check to set if the filter input is inside of the task
  //     // string
  //     return taskLower.includes(filterLower);
  //   });
    
  // };
  getEO(eoName?: string) {
    if (eoName) { 
    this.http.get(this.url + `eo/${eoName}`).subscribe(
      (resp:any) => {
        this.eoSearch = resp
      },
      (error) => {
        console.log(error);
        }
        //add else to return all oils
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

  // getSymptoms() : void {
  //   this.symptoms = [];

  //   this.http.get(this.url + 'symptoms').subscribe(
  //     (data) => {
  //       for (const key in data) {
  //         if (Object.prototype.hasOwnProperty.call(data, key)) {
  //           const apple = data[key];

  //           this.symptoms.push(this.apple);
  //         }
  //       }
  //     },
  //     (error) => {
  //       console.error('there is an error');
  //     }
  //   );
  // }
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
}
