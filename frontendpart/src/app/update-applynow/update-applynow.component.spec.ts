import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateApplynowComponent } from './update-applynow.component';

describe('UpdateApplynowComponent', () => {
  let component: UpdateApplynowComponent;
  let fixture: ComponentFixture<UpdateApplynowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateApplynowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateApplynowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
