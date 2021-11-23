import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcompanyListComponent } from './addcompany-list.component';

describe('AddcompanyListComponent', () => {
  let component: AddcompanyListComponent;
  let fixture: ComponentFixture<AddcompanyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcompanyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcompanyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
