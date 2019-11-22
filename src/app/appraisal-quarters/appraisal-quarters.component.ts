import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appraisal-quarters',
  templateUrl: './appraisal-quarters.component.html',
  styleUrls: ['./appraisal-quarters.component.css']
})
export class AppraisalQuartersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  designation = sessionStorage.getItem("designation");
  manager = sessionStorage.getItem("manager");
  

}
