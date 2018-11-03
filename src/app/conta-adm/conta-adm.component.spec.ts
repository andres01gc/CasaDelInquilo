import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaAdmComponent } from './conta-adm.component';

describe('ContaAdmComponent', () => {
  let component: ContaAdmComponent;
  let fixture: ComponentFixture<ContaAdmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContaAdmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
