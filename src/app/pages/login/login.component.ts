import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

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
      Validators.minLength(6),
    ]),
  });

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    if (this.authService.isLoggedIn) {
      this.authService.logout();
    }
  }

  login(): void {
    this.authService
      .login(
        this.loginForm.value.emailFormControl,
        this.loginForm.value.passwordFormControl
      )
      .then(() => {
        this.loginForm.reset();
        this.router.navigateByUrl('home');
      });
  }

  navigateToSignUp() {
    this.router.navigateByUrl('/signup');
  }
}
