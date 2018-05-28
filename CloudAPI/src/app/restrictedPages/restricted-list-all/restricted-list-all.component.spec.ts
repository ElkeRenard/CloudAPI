import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrictedListAllComponent } from './restricted-list-all.component';

describe('RestrictedListAllComponent', () => {
  let component: RestrictedListAllComponent;
  let fixture: ComponentFixture<RestrictedListAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestrictedListAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestrictedListAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
