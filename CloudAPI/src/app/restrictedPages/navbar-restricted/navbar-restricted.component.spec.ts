import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarRestrictedComponent } from './navbar-restricted.component';

describe('NavbarRestrictedComponent', () => {
  let component: NavbarRestrictedComponent;
  let fixture: ComponentFixture<NavbarRestrictedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarRestrictedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarRestrictedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
