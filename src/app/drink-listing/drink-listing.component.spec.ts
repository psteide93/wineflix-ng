import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkListingComponent } from './drink-listing.component';

describe('DrinkListingComponent', () => {
  let component: DrinkListingComponent;
  let fixture: ComponentFixture<DrinkListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrinkListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
