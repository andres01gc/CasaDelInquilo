import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaDueComponent } from './casa-due.component';

describe('CasaDueComponent', () => {
  let component: CasaDueComponent;
  let fixture: ComponentFixture<CasaDueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasaDueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasaDueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
