import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaCasaComponent } from './nueva-casa.component';

describe('NuevaCasaComponent', () => {
  let component: NuevaCasaComponent;
  let fixture: ComponentFixture<NuevaCasaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaCasaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaCasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
