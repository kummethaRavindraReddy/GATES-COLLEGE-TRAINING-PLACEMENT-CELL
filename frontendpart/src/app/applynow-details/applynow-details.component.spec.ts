import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplynowDetailsComponent } from './applynow-details.component';

describe('ApplynowDetailsComponent', () => {
  let component: ApplynowDetailsComponent;
  let fixture: ComponentFixture<ApplynowDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplynowDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplynowDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
