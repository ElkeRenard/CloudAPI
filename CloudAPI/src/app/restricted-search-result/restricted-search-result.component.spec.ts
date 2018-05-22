import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrictedSearchResultComponent } from './restricted-search-result.component';

describe('RestrictedSearchResultComponent', () => {
  let component: RestrictedSearchResultComponent;
  let fixture: ComponentFixture<RestrictedSearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestrictedSearchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestrictedSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
