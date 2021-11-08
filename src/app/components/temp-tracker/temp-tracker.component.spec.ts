import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TempTrackerComponent } from './temp-tracker.component';
import { AbstractControl, ReactiveFormsModule } from '@angular/forms';

fdescribe('TempTrackerComponent', () => {
  let component: TempTrackerComponent;
  let fixture: ComponentFixture<TempTrackerComponent>;
  let temperature: AbstractControl;

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
    component.ngOnInit();
    fixture.detectChanges();
    temperature = component.tempTrackerForm.controls.temperature;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a temperature input field ', () => {
    expect(temperature.valid).toBeFalsy();
    expect(temperature.hasError('required')).toBeTruthy();
    expect(temperature.pristine).toBeTruthy();
  });
  it('temperature should not be empty', () => {
    temperature.setValue('');
    expect(temperature.hasError('required')).toBeTruthy();
  });
  it('Temperature Tracker - True - case1', () => {
    temperature.setValue(0);
    expect(temperature.valid).toBeTruthy();
  });
  it('Temperature Tracker - True - case2', () => {
    temperature.setValue(88);
    expect(temperature.valid).toBeTruthy();
  });
  it('Temperature Tracker - True - case3', () => {
    temperature.setValue(99);
    expect(temperature.valid).toBeTruthy();
  });
  it('Temperature Tracker - True - case4', () => {
    temperature.setValue(123);
    expect(temperature.valid).toBeTruthy();
  });
  it('Temperature Tracker - True - case5', () => {
    temperature.setValue(150);
    expect(temperature.valid).toBeTruthy();
  });
  it('Temperature Tracker - False - case1', () => {
    temperature.setValue(-10);
    expect(temperature.hasError('pattern')).toBeTruthy();
  });
  it('Temperature Tracker - False - case2', () => {
    temperature.setValue(-155);
    expect(temperature.hasError('pattern')).toBeTruthy();
  });
  it('Temperature Tracker - False - case3', () => {
    temperature.setValue(155);
    expect(temperature.hasError('pattern')).toBeTruthy();
  });
  it('Temperature Tracker - False - case4', () => {
    temperature.setValue(500);
    expect(temperature.hasError('pattern')).toBeTruthy();
  });
  it('Temperature Tracker - False - case5', () => {
    temperature.setValue('abc');
    expect(temperature.hasError('pattern')).toBeTruthy();
  });
});
