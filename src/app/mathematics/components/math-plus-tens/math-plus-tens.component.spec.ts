import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MathPlusTensComponent } from './math-plus-tens.component';

describe('MathPlusTensComponent', () => {
  let component: MathPlusTensComponent;
  let fixture: ComponentFixture<MathPlusTensComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MathPlusTensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathPlusTensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
