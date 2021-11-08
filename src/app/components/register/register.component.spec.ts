import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { RegisterComponent } from './register.component';

fdescribe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let firstName: AbstractControl;
  let lastName: AbstractControl;
  let phoneNumber: AbstractControl;
  let country: AbstractControl;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [ReactiveFormsModule, RouterTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
    firstName = component.registerForm.controls.firstName;
    lastName = component.registerForm.controls.lastName;
    phoneNumber = component.registerForm.controls.phoneNumber;
    country = component.registerForm.controls.country;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a firstName input field ', () => {
    expect(firstName.valid).toBeFalsy();
    expect(firstName.hasError('required')).toBeTruthy();
    expect(firstName.pristine).toBeTruthy();
  });
  it('first name should not be empty', () => {
    firstName.setValue('');
    expect(firstName.hasError('required')).toBeTruthy();
  });
  it('first name should not contain numbers', () => {
    firstName.setValue('robs1');
    expect(firstName.hasError('pattern')).toBeTruthy();
  });
  it('first name should not be less than 6 charecters', () => {
    firstName.setValue('robss');
    expect(firstName.hasError('pattern')).toBeTruthy();
  });
  it('first name should be more than or equal to 6 charecters', () => {
    firstName.setValue('steves');
    expect(firstName.hasError('required')).toBeFalsy();
    expect(firstName.hasError('pattern')).toBeFalsy();
    expect(firstName.valid).toBeTruthy();
  });
  it('should have a lastName input field ', () => {
    expect(lastName.valid).toBeFalsy();
    expect(lastName.hasError('required')).toBeTruthy();
    expect(lastName.pristine).toBeTruthy();
  });
  it('last name should not be empty', () => {
    lastName.setValue('');
    expect(lastName.hasError('required')).toBeTruthy();
  });
  it('last name should not contain numbers', () => {
    lastName.setValue('robs1');
    expect(lastName.hasError('pattern')).toBeTruthy();
  });
  it('last name should not be less than 6 charecters', () => {
    lastName.setValue('robss');
    expect(lastName.hasError('pattern')).toBeTruthy();
  });
  it('last name should be more than or equal to 6 charecters', () => {
    lastName.setValue('robert');
    expect(lastName.hasError('required')).toBeFalsy();
    expect(lastName.hasError('pattern')).toBeFalsy();
    expect(lastName.valid).toBeTruthy();
  });
  it('should have a phoneNumber input field ', () => {
    expect(phoneNumber.valid).toBeFalsy();
    expect(phoneNumber.hasError('required')).toBeTruthy();
    expect(phoneNumber.pristine).toBeTruthy();
  });
  it('phone number should not be empty', () => {
    phoneNumber.setValue('');
    expect(phoneNumber.hasError('required')).toBeTruthy();
  });
  it('phone number should contain valid input value', () => {
    phoneNumber.setValue('985623214');
    expect(phoneNumber.valid).toBeTruthy();
  });
  it('should have a country input field ', () => {
    expect(country.valid).toBeFalsy();
    expect(country.hasError('required')).toBeTruthy();
    expect(country.pristine).toBeTruthy();
  });
  it('country should not be empty', () => {
    country.setValue(undefined);
    expect(country.hasError('required')).toBeTruthy();
  });
  it('country should contain valid input value', () => {
    country.setValue('1');
    expect(country.valid).toBeTruthy();
  });
});
