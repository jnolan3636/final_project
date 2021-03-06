import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { SymptomsComponent} from './symptoms/symptoms.component';
import { EoComponent} from './eo/eo.component';
  
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'symptoms', component: SymptomsComponent},
  {path: 'eo', component: EoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
