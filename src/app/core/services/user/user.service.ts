import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject, firstValueFrom, map, Observable, of } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user$: Observable<User | undefined> = of(undefined);
  private userId$ = new BehaviorSubject<string | undefined>(undefined);
  constructor(public afs: AngularFirestore) {
    this.userId$.subscribe((uid) => {
      if (uid) {
        this.user$ = this.afs
          .collection('Users')
          .doc(uid)
          .valueChanges() as Observable<User>;
      } else {
        this.user$ = of(undefined);
      }
    });
  }

  addUserToFireBase(user: User): Promise<void> {
    return this.afs
      .collection('Users')
      .doc(user.uid)
      .set({ ...user, type: 'User' });
  }

  fetchUserDataById(uid: string): Promise<string | undefined> {
    this.userId$.next(uid);
    return firstValueFrom(this.userId$.asObservable());
  }

  resetUser(): void {
    this.userId$.next(undefined);
  }
}
