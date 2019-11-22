import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeedashboardComponent } from './employeedashboard/employeedashboard.component';
import { LoginComponent } from './login/login.component';


import {AppraisalQuartersComponent} from './appraisal-quarters/appraisal-quarters.component';
import { DatatablesexampleComponent } from './datatablesexample/datatablesexample.component';


const routes: Routes = [
  {path:'', loadChildren: './login/login.module#LoginModule'},
  {path:'employeedashboard', loadChildren: './employeedashboard/employeedashboard.module#EmployeedashboardModule'},
  {path:'datatables', component: DatatablesexampleComponent}
];

/* [
  { path: '', component: LoginComponent },
  { path: 'employeedashboard', component: EmployeedashboardComponent, children: [
    {
      path: 'appraisaldetails',
      component: AppraisalQuartersComponent
  },
  

  // otherwise redirect to login
  { path: '**', redirectTo: '' }
  
];
*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
