import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAdmComponent } from './main-adm.component';

describe('MainAdmComponent', () => {
  let component: MainAdmComponent;
  let fixture: ComponentFixture<MainAdmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainAdmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
