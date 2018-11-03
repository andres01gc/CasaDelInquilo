import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaGeneralDueComponent } from './conta-general-due.component';

describe('ContaGeneralDueComponent', () => {
  let component: ContaGeneralDueComponent;
  let fixture: ComponentFixture<ContaGeneralDueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContaGeneralDueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaGeneralDueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
