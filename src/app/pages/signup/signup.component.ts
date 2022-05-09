import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User, UserType } from 'src/app/core/models/user.model';
import { AuthService } from 'src/app/core/services/auth/auth.service';

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
      Validators.minLength(6),
    ]),
  });

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    if (this.authService.isLoggedIn) {
      this.authService.logout();
    }
  }

  signUp(): void {
    const user: User = {
      uid: '',
      email: this.signUpForm.value.emailFormControl as string,
      userName: this.signUpForm.value.userNameFormControl as string,
      firstName: this.signUpForm.value.firstNameFormControl as string,
      lastName: this.signUpForm.value.lastNameFormControl as string,
      basket: [],
      orders: [],
      type: 'User' as UserType,
    };
    const password: string = this.signUpForm.value.passwordFormControl;
    this.authService.signUp(user, password).then(() => {
      this.signUpForm.reset();
      this.router.navigateByUrl('/products');
    });
  }

  navigateToLogin() {
    this.router.navigateByUrl('/login');
  }
}
