import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signUpForm = new FormGroup({
    emailFormControl: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    userNameFormControl: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    firstNameFormControl: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    lastNameFormControl: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    passwordFormControl: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    confirmPasswordFormControl: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  constructor(private router: Router) {}

  ngOnInit() {}

  signUp(): void {
    console.log(
      this.signUpForm.value.emailFormControl,
      this.signUpForm.value.passwordFormControl
    );
  }

  navigateToLogin() {
    this.router.navigateByUrl('/login');
  }
}
