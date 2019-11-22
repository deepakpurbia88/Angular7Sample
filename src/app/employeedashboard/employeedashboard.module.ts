import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDashboardRoutingModule } from './employeedashboard-routing.module';
import {EmployeedashboardComponent} from './employeedashboard.component';
import { AppraisalQuartersComponent } from '../appraisal-quarters/appraisal-quarters.component';


@NgModule({
  imports: [
    CommonModule,
    EmployeeDashboardRoutingModule

  ],
  declarations: [EmployeedashboardComponent,
    AppraisalQuartersComponent],
  exports : [EmployeedashboardComponent,
    AppraisalQuartersComponent]
})
export class EmployeedashboardModule { }
