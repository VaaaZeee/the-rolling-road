import { Injectable } from '@angular/core';
import { distinctUntilChanged, map, Observable, take, tap } from 'rxjs';
import { UserService } from '../user/user.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Order } from '../../models/order.model';
import { BoardGame } from '../../models/product.models';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  public basket$: Observable<string[] | undefined>;
  public orders$: Observable<Order[] | undefined>;
  constructor(private userService: UserService, private afs: AngularFirestore) {
    this.basket$ = this.userService.user$.pipe(
      distinctUntilChanged(),
      map((user) => {
        if (user) {
          return user.basket;
        }
        return undefined;
      })
    );
    this.orders$ = this.userService.user$.pipe(
      distinctUntilChanged(),
      map((user) => {
        if (user) {
          return user.orders;
        }
        return undefined;
      })
    );
  }

  adToBusket(boardGameId: string): void {
    this.userService.user$
      .pipe(
        take(1),
        tap((user) => {
          if (user) {
            const basket = user.basket;
            basket.push(boardGameId);
            this.afs.collection('Users').doc(user.uid).update({ basket });
          }
        })
      )
      .subscribe();
  }

  removeFromBusket(id: string, count: number = 1): void {
    this.userService.user$
      .pipe(
        take(1),
        tap((user) => {
          if (user) {
            const basket: string[] = [];
            for (let i = 0; i < user.basket.length; i++) {
              if (count > 0 && user.basket[i] === id) {
                count -= 1;
              } else {
                basket.push(user.basket[i]);
              }
            }
            this.afs.collection('Users').doc(user.uid).update({ basket });
          }
        })
      )
      .subscribe();
  }

  saveOrder(): void {
    this.userService.user$
      .pipe(
        take(1),
        tap((user) => {
          if (user) {
            const order: Order = {
              id: this.afs.createId(),
              basket: user.basket,
              date: new Date(),
            };
            this.afs.collection('Users').doc(user.uid).update({ order });
          }
        })
      )
      .subscribe();
  }
}
