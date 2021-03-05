import { Injectable } from '@angular/core';
import { List } from './eo';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class EOAPIService {
  public essentialOils: List[];
  public url: string = '/api/routes/';
  constructor(private http: HttpClient) {
    this.essentialOils = [];
  }
    getOil() {
      this.essentialOils = [];
      
      this.http
        .get(this.url) 
        .subscribe(
          
          (data) => {
           
            for (const key in data) {
              if (Object.prototype.hasOwnProperty.call(data, key)) {
                const essentialOil = data[key]; // individual villager
  
  
                this.essentialOils.push(essentialOil);
                //console.log(this.villagers);
              }
            }
          },
          (error) => {
           
            console.error(error);
          }
        );
    }
  }


  
