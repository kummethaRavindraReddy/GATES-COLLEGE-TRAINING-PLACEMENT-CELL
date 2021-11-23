import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplynowListComponent } from './applynow-list.component';

describe('ApplynowListComponent', () => {
  let component: ApplynowListComponent;
  let fixture: ComponentFixture<ApplynowListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplynowListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplynowListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
