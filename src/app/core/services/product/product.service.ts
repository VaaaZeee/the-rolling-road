import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { BoardGame } from '../../models/product.models';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public products$: Observable<BoardGame[]> | undefined;

  constructor(private afStore: AngularFirestore) {
    this.products$ = this.afStore
      .collection('BoardGames')
      .valueChanges() as unknown as Observable<BoardGame[]>;
  }

  addProductToFireStore(product: BoardGame): void {
    const id = this.afStore.createId();
    product.id = id;
    this.afStore.collection('BoardGames').doc(id).set(product);
  }

  editProductInFireStore(product: BoardGame): void {
    this.afStore.collection('BoardGames').doc(product.id).set(product);
  }
}
