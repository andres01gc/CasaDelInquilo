import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigCasaComponent } from './config-casa.component';

describe('ConfigCasaComponent', () => {
  let component: ConfigCasaComponent;
  let fixture: ComponentFixture<ConfigCasaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigCasaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigCasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
