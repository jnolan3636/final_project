import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { SymptomsComponent} from './symptoms/symptoms.component';
import { EoComponent} from './eo/eo.component';
import { AboutUsComponent } from './about-us/about-us.component';
  
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'symptoms', component: SymptomsComponent},
  {path: 'symptoms/:symp_name', component: SymptomsComponent},
  {path: 'eo', component: EoComponent},
  { path: 'about-us', component: AboutUsComponent},
  {path: 'eo/:eo_name', component: EoComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
