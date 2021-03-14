import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageNoFoundComponent } from './page-no-found.component';

describe('PageNoFoundComponent', () => {
  let component: PageNoFoundComponent;
  let fixture: ComponentFixture<PageNoFoundComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNoFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNoFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
