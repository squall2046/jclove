import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathBookComponent } from './math-book.component';

describe('MathBookComponent', () => {
  let component: MathBookComponent;
  let fixture: ComponentFixture<MathBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
