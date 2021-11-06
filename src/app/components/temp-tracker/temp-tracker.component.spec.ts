import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TempTrackerComponent } from './temp-tracker.component';
import { ReactiveFormsModule } from '@angular/forms';

fdescribe('TempTrackerComponent', () => {
  let component: TempTrackerComponent;
  let fixture: ComponentFixture<TempTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TempTrackerComponent],
      imports: [ReactiveFormsModule]
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
  it('should have a temperature input field ', () => {
    const temperature = component.tempTrackerForm.controls.temperature;
    expect(temperature.valid).toBeFalsy();
    expect(temperature.hasError('required')).toBeTruthy();
    expect(temperature.pristine).toBeTruthy();
  });
  it('temperature should not be empty', () => {
    const temperature = component.tempTrackerForm.controls.temperature;
    temperature.setValue('');
    expect(temperature.hasError('required')).toBeTruthy();
  });
  it('temperature should not be less than 0 and greater than 150', () => {
    const temperature = component.tempTrackerForm.controls.temperature;
    temperature.setValue(155);
    expect(temperature.hasError('pattern')).toBeTruthy();
  });
  it('temperature should lie between 0 to 150 only', () => {
    const temperature = component.tempTrackerForm.controls.temperature;
    temperature.setValue(150);
    expect(temperature.valid).toBeTruthy();
  });
});
