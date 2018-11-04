import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCasaComponent } from './home-casa.component';

describe('HomeCasaComponent', () => {
  let component: HomeCasaComponent;
  let fixture: ComponentFixture<HomeCasaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCasaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
