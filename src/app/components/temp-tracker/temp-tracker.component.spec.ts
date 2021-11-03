import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempTrackerComponent } from './temp-tracker.component';

describe('TempTrackerComponent', () => {
  let component: TempTrackerComponent;
  let fixture: ComponentFixture<TempTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempTrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
