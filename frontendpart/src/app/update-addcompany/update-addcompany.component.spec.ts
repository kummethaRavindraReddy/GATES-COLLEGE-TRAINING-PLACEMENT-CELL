import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAddcompanyComponent } from './update-addcompany.component';

describe('UpdateAddcompanyComponent', () => {
  let component: UpdateAddcompanyComponent;
  let fixture: ComponentFixture<UpdateAddcompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAddcompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAddcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
