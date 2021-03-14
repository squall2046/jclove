import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MathematicsComponent } from './mathematics.component';

describe('MathComponent', () => {
  let component: MathematicsComponent;
  let fixture: ComponentFixture<MathematicsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MathematicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathematicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
