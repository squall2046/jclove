import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MandarinComponent } from './mandarin.component';

describe('MandarinComponent', () => {
  let component: MandarinComponent;
  let fixture: ComponentFixture<MandarinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MandarinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MandarinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
