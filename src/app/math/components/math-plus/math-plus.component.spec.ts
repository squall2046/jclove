import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathPlusComponent } from './math-plus.component';

describe('MathPlusComponent', () => {
  let component: MathPlusComponent;
  let fixture: ComponentFixture<MathPlusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathPlusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
