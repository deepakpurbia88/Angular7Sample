import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeedashboardComponent } from './employeedashboard.component';
import { AppraisalQuartersComponent } from '../appraisal-quarters/appraisal-quarters.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeedashboardComponent, 
    children: [
        {
          path: 'appraisaldetails',
          component: AppraisalQuartersComponent
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeDashboardRoutingModule { }
