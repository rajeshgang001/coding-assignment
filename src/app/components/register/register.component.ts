import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initregisterForm();
  }

  initregisterForm(): void {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z\s,-]{6,}')]],
      lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z\s,-]{6,}')]],
      phoneNumber: ['', Validators.required],
      country: ['', Validators.required]
    });
  }

  get controls(): any {
    return this.registerForm.controls;
  }

  onRegister(): void {
    alert('Succesfully registered.Now you are redicted to main page.');
    this.router.navigate(['/actions/anagram-tester']);
  }
}
