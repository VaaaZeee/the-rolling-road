import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject, firstValueFrom, map, Observable } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user$ = new BehaviorSubject<User | undefined>(undefined);

  constructor(public afs: AngularFirestore) {}

  addUserToFireBase(user: User): Promise<void> {
    return this.afs
      .collection('Users')
      .doc(user.uid)
      .set({ ...user, type: 'User' });
  }

  fetchUserDataById(uid: string): Promise<User> {
    return firstValueFrom(
      this.afs
        .collection('Users')
        .doc(uid)
        .get()
        .pipe(
          map((user) => {
            const userData: User = user.data() as User;
            this.user$.next(userData);
            return userData;
          })
        )
    );
  }

  resetUser(): void {
    this.user$.next(undefined);
  }
}
