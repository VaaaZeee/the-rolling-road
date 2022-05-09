import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { BehaviorSubject, distinctUntilChanged } from 'rxjs';
import { User } from '../../models/user.model';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private auth: AngularFireAuth,
    public router: Router,
    public userService: UserService
  ) {
    this.auth.authState.pipe(distinctUntilChanged()).subscribe((user) => {
      if (user) {
        this.userService.fetchUserDataById(user.uid);
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        localStorage.setItem('user', 'null');
      }
    });
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null;
  }

  login(email: string, password: string): Promise<any> {
    return this.auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        if (result.user?.uid) {
          return this.userService.fetchUserDataById(result.user.uid);
        }
        return undefined;
      })
      .then(() => {
        this.router.navigateByUrl('products');
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  signUp(user: User, password: string) {
    return this.auth
      .createUserWithEmailAndPassword(user.email, password)
      .then((result) => {
        if (result.user?.uid) {
          user.uid = result.user?.uid;
          this.userService.addUserToFireBase(user);
        }
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  logout(): Promise<void> {
    return this.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.userService.resetUser();
      this.router.navigateByUrl('/login');
    });
  }
}
