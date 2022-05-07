import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(private router: Router, private authService: AuthService) {}

  canLoad(): boolean {
    if (this.authService.isLoggedIn) {
      return true;
    } else {
      this.router.navigateByUrl('login');
      return false;
    }
  }
}
