import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrictedStoriesComponent } from './restricted-stories.component';

describe('RestrictedStoriesComponent', () => {
  let component: RestrictedStoriesComponent;
  let fixture: ComponentFixture<RestrictedStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestrictedStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestrictedStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
