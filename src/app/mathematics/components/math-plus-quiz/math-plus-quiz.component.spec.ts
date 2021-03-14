import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MathPlusQuizComponent } from './math-plus-quiz.component';

describe('MathPlusQuizComponent', () => {
  let component: MathPlusQuizComponent;
  let fixture: ComponentFixture<MathPlusQuizComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MathPlusQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathPlusQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
