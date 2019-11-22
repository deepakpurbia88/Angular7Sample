import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppraisalQuartersComponent } from './appraisal-quarters.component';
import { AppraisalQuartersRoutingModule } from './appraisal-quarters-routing.module';



@NgModule({
  
  imports: [
    CommonModule,
    AppraisalQuartersRoutingModule
  ],
  declarations:[AppraisalQuartersComponent],
  exports : [AppraisalQuartersComponent]
})
export class AppraisalQuartersModule { }
