import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { RegisterComponent } from './register.component';

fdescribe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [FormsModule, RouterTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('first name and last names should not be empty', async () => {
    fixture.whenStable().then(() => {
      let firstName = component.registerForm.form.controls['firstName'];
      let lastName = component.registerForm.form.controls['lastName'];
      firstName.setValue('');
      lastName.setValue('');
      expect(firstName.errors['required']).toBeTruthy();
      expect(lastName.errors['required']).toBeTruthy();
    });
  });
  it('first name and last names chatecters should be greater than 5', async () => {
    fixture.whenStable().then(() => {
      let firstName = component.registerForm.form.controls['firstName'];
      let lastName = component.registerForm.form.controls['lastName'];
      firstName.setValue('robs');
      lastName.setValue('robs');
      expect(firstName.errors['pattern']).toBeTruthy();
      expect(lastName.errors['pattern']).toBeTruthy();
    });
  });
  it('first name should not contain numbers', async () => {
    fixture.whenStable().then(() => {
      let firstName = component.registerForm.form.controls['firstName'];
      let lastName = component.registerForm.form.controls['lastName'];
      firstName.setValue('robs1');
      lastName.setValue('robs1');
      expect(firstName.errors['pattern']).toBeTruthy();
      expect(lastName.errors['pattern']).toBeTruthy();
    });
  });
  it('first name should have min 5 charecters', async () => {
    fixture.whenStable().then(() => {
      let firstName = component.registerForm.form.controls['firstName'];
      let lastName = component.registerForm.form.controls['lastName'];
      firstName.setValue('rob steve');
      lastName.setValue('rob steve');
      expect(firstName.valid).toBeTruthy();
      expect(lastName.valid).toBeTruthy();
    });
  });
  it('phone number should not be empty', async () => {
    fixture.whenStable().then(() => {
      let phoneNumber = component.registerForm.form.controls['phoneNumber'];
      phoneNumber.setValue('');
      expect(phoneNumber.errors['required']).toBeTruthy();
    });
  });
  it('phone number should have negative numbers', async () => {
    fixture.whenStable().then(() => {
      let phoneNumber = component.registerForm.form.controls['phoneNumber'];
      phoneNumber.setValue('-123');
      expect(phoneNumber.errors['pattern']).toBeTruthy();
    });
  });
  it('phone number should not have charecters', async () => {
    fixture.whenStable().then(() => {
      let phoneNumber = component.registerForm.form.controls['phoneNumber'];
      phoneNumber.setValue('rob');
      expect(phoneNumber.errors['pattern']).toBeTruthy();
    });
  });
  it('phone number should have only positive numbers', async () => {
    fixture.whenStable().then(() => {
      let phoneNumber = component.registerForm.form.controls['phoneNumber'];
      phoneNumber.setValue('123');
      expect(phoneNumber.valid).toBeTruthy();
    });
  });
  it('country should not be empty', async () => {
    fixture.whenStable().then(() => {
      let country = component.registerForm.form.controls['country'];
      country.setValue('');
      expect(country.errors['required']).toBeTruthy();
    });
  });
});
