import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { RegisterComponent } from './register.component';

fdescribe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a firstName input field ', () => {
    const firstName = component.registerForm.controls.firstName;
    expect(firstName.valid).toBeFalsy();
    expect(firstName.hasError('required')).toBeTruthy();
    expect(firstName.pristine).toBeTruthy();
  });
  it('first name should not be empty', () => {
    const firstName = component.registerForm.controls.firstName;
    firstName.setValue('');
    expect(firstName.hasError('required')).toBeTruthy();
  });
  it('first name should not contain numbers', () => {
    const firstName = component.registerForm.controls.firstName;
    firstName.setValue('robs1');
    expect(firstName.hasError('pattern')).toBeTruthy();
  });
  it('first name should not be less than 6 charecters', () => {
    const firstName = component.registerForm.controls.firstName;
    firstName.setValue('robss');
    expect(firstName.hasError('pattern')).toBeTruthy();
  });
  it('first name should be more than or equal to 6 charecters', () => {
    const firstName = component.registerForm.controls.firstName;
    firstName.setValue('steves');
    expect(firstName.hasError('required')).toBeFalsy();
    expect(firstName.hasError('pattern')).toBeFalsy();
    expect(firstName.valid).toBeTruthy();
  });
  it('should have a lastName input field ', () => {
    const lastName = component.registerForm.controls.lastName;
    expect(lastName.valid).toBeFalsy();
    expect(lastName.hasError('required')).toBeTruthy();
    expect(lastName.pristine).toBeTruthy();
  });
  it('last name should not be empty', () => {
    const lastName = component.registerForm.controls.lastName;
    lastName.setValue('');
    expect(lastName.hasError('required')).toBeTruthy();
  });
  it('last name should not contain numbers', () => {
    const lastName = component.registerForm.controls.lastName;
    lastName.setValue('robs1');
    expect(lastName.hasError('pattern')).toBeTruthy();
  });
  it('last name should not be less than 6 charecters', () => {
    const lastName = component.registerForm.controls.lastName;
    lastName.setValue('robss');
    expect(lastName.hasError('pattern')).toBeTruthy();
  });
  it('last name should be more than or equal to 6 charecters', () => {
    const lastName = component.registerForm.controls.lastName;
    lastName.setValue('robert');
    expect(lastName.hasError('required')).toBeFalsy();
    expect(lastName.hasError('pattern')).toBeFalsy();
    expect(lastName.valid).toBeTruthy();
  });
  it('should have a phoneNumber input field ', () => {
    const phoneNumber = component.registerForm.controls.phoneNumber;
    expect(phoneNumber.valid).toBeFalsy();
    expect(phoneNumber.hasError('required')).toBeTruthy();
    expect(phoneNumber.pristine).toBeTruthy();
  });
  it('phone number should not be empty', () => {
    const phoneNumber = component.registerForm.controls.phoneNumber;
    phoneNumber.setValue('');
    expect(phoneNumber.hasError('required')).toBeTruthy();
  });
  it('phone number should contain valid input value', () => {
    const phoneNumber = component.registerForm.controls.phoneNumber;
    phoneNumber.setValue('985623214');
    expect(phoneNumber.valid).toBeTruthy();
  });
  it('should have a country input field ', () => {
    const country = component.registerForm.controls.country;
    expect(country.valid).toBeFalsy();
    expect(country.hasError('required')).toBeTruthy();
    expect(country.pristine).toBeTruthy();
  });
  it('country should not be empty', () => {
    const phoneNumber = component.registerForm.controls.phoneNumber;
    phoneNumber.setValue(undefined);
    expect(phoneNumber.hasError('required')).toBeTruthy();
  });
  it('country should contain valid input value', () => {
    const phoneNumber = component.registerForm.controls.phoneNumber;
    phoneNumber.setValue('1');
    expect(phoneNumber.valid).toBeTruthy();
  });
});
