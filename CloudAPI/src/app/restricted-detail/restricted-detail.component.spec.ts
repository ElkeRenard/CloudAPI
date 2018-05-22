import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrictedDetailComponent } from './restricted-detail.component';

describe('RestrictedDetailComponent', () => {
  let component: RestrictedDetailComponent;
  let fixture: ComponentFixture<RestrictedDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestrictedDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestrictedDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
