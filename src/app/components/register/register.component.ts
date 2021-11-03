import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  @ViewChild('registerForm', { static: true }) registerForm: NgForm;

  constructor(private _router: Router) { }

  ngOnInit(): void { }

  onRegister(form: NgForm) {
    alert('Succesfully registered.Now you are redicted to main page.');
    this._router.navigate(['/actions/anagram-tester']);
  }
}
