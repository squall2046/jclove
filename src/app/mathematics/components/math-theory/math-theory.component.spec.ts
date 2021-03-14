import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MathTheoryComponent } from './math-theory.component';

describe('MathTheoryComponent', () => {
  let component: MathTheoryComponent;
  let fixture: ComponentFixture<MathTheoryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MathTheoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathTheoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
