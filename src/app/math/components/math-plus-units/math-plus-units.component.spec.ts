import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathPlusUnitsComponent } from './math-plus-units.component';

describe('MathPlusUnitsComponent', () => {
  let component: MathPlusUnitsComponent;
  let fixture: ComponentFixture<MathPlusUnitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathPlusUnitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathPlusUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
