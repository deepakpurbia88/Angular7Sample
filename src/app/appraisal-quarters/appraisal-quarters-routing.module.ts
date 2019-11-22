import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppraisalQuartersComponent } from '../appraisal-quarters/appraisal-quarters.component';

const routes: Routes = [
  {
    path: '',
    component: AppraisalQuartersComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppraisalQuartersRoutingModule { }
