import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechsortComponent } from './techsort.component';

describe('TechsortComponent', () => {
  let component: TechsortComponent;
  let fixture: ComponentFixture<TechsortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechsortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechsortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
