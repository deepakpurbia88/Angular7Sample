import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatablesexampleComponent } from './datatablesexample.component';

describe('DatatablesexampleComponent', () => {
  let component: DatatablesexampleComponent;
  let fixture: ComponentFixture<DatatablesexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatatablesexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatablesexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
