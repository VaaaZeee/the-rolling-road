import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(
    private afStorage: AngularFireStorage,
    private afStore: AngularFirestore
  ) {
    this.afStorage.storage
      .ref('/product-images/10547.jpg')
      .getDownloadURL()
      .then((url) => {
        console.log(url);
      });
  }
}
