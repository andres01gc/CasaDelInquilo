import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDueComponent } from './home-due.component';

describe('HomeDueComponent', () => {
  let component: HomeDueComponent;
  let fixture: ComponentFixture<HomeDueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
