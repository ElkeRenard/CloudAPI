import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrictedHomeComponent } from './restricted-home.component';

describe('RestrictedHomeComponent', () => {
  let component: RestrictedHomeComponent;
  let fixture: ComponentFixture<RestrictedHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestrictedHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestrictedHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
