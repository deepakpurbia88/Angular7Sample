import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppraisalQuartersComponent } from './appraisal-quarters.component';

describe('AppraisalQuartersComponent', () => {
  let component: AppraisalQuartersComponent;
  let fixture: ComponentFixture<AppraisalQuartersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppraisalQuartersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppraisalQuartersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
