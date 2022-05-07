import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    emailFormControl: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    passwordFormControl: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  constructor(private router: Router) {}

  ngOnInit() {}

  login(): void {
    console.log(
      this.loginForm.value.emailFormControl,
      this.loginForm.value.passwordFormControl
    );
  }

  navigateToSignUp() {
    this.router.navigateByUrl('/signup');
  }
}
