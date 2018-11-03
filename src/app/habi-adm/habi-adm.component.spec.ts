import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabiAdmComponent } from './habi-adm.component';

describe('HabiAdmComponent', () => {
  let component: HabiAdmComponent;
  let fixture: ComponentFixture<HabiAdmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabiAdmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabiAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
