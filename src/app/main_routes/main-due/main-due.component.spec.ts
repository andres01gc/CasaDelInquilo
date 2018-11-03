import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDueComponent } from './main-due.component';

describe('MainDueComponent', () => {
  let component: MainDueComponent;
  let fixture: ComponentFixture<MainDueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainDueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
