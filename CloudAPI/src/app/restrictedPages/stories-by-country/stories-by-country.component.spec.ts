import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesByCountryComponent } from './stories-by-country.component';

describe('StoriesByCountryComponent', () => {
  let component: StoriesByCountryComponent;
  let fixture: ComponentFixture<StoriesByCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoriesByCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoriesByCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
