import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathPlusQuizComponent } from './math-plus-quiz.component';

describe('MathPlusQuizComponent', () => {
  let component: MathPlusQuizComponent;
  let fixture: ComponentFixture<MathPlusQuizComponent>;

  beforeEach(async(() => {
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
