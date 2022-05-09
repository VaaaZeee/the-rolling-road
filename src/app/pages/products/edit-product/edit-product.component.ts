import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BoardGame } from 'src/app/core/models/product.models';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit {
  editProductForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BoardGame
  ) {
    this.editProductForm = new FormGroup({
      nameFormControl: new FormControl(this.data.name, [
        Validators.required,
        Validators.minLength(3),
      ]),
      brandFormControl: new FormControl(this.data.brand, [
        Validators.required,
        Validators.minLength(3),
      ]),
      inStockFormControl: new FormControl(this.data.inStock, [
        Validators.required,
        Validators.min(0),
      ]),
      minPlayerFormControl: new FormControl(this.data.minPlayer, [
        Validators.required,
        Validators.min(0),
      ]),
      maxPlayerFormControl: new FormControl(this.data.maxPlayer, [
        Validators.required,
        Validators.min(0),
      ]),
      ageFormControl: new FormControl(this.data.age, [
        Validators.required,
        Validators.min(0),
      ]),
      playingTimeLowerFormControl: new FormControl(this.data.playingTimeLower, [
        Validators.required,
        Validators.min(0),
      ]),
      playingTimeUpperFormControl: new FormControl(this.data.playingTimeUpper, [
        Validators.required,
        Validators.min(0),
      ]),
      categoriesFormControl: new FormControl(this.data.categories, [
        Validators.required,
        Validators.minLength(3),
      ]),
      languageFormControl: new FormControl(this.data.languages, [
        Validators.required,
        Validators.minLength(3),
      ]),
      shortDescriptionFormControl: new FormControl(this.data.shortDescription, [
        Validators.required,
        Validators.minLength(3),
      ]),
      longDescriptionFormControl: new FormControl(this.data.longDescription, [
        Validators.required,
        Validators.minLength(3),
      ]),
      designersFormControl: new FormControl(this.data.designers, [
        Validators.required,
      ]),
      artistsFormControl: new FormControl(this.data.artists, [
        Validators.required,
      ]),
      typeOfGameFormControl: new FormControl(this.data.typeOfGame, [
        Validators.required,
      ]),
      imageUrlFormControl: new FormControl(this.data.imageUrl, [
        Validators.required,
      ]),
      priceFormControl: new FormControl(this.data.price, [
        Validators.required,
        Validators.min(0),
      ]),
    });
  }

  fetchProduct(): BoardGame {
    return {
      id: this.data.id,
      name: this.editProductForm.value.nameFormControl,
      brand: this.editProductForm.value.brandFormControl,
      inStock: this.editProductForm.value.inStockFormControl,
      minPlayer: this.editProductForm.value.minPlayerFormControl,
      maxPlayer: this.editProductForm.value.maxPlayerFormControl,
      age: this.editProductForm.value.ageFormControl,
      playingTimeLower: this.editProductForm.value.playingTimeLowerFormControl,
      playingTimeUpper: this.editProductForm.value.playingTimeUpperFormControl,
      categories: this.editProductForm.value.categoriesFormControl,
      imageUrl: this.editProductForm.value.imageUrlFormControl,
      languages: this.editProductForm.value.languageFormControl,
      shortDescription: this.editProductForm.value.shortDescriptionFormControl,
      longDescription: this.editProductForm.value.longDescriptionFormControl,
      designers: this.editProductForm.value.designersFormControl,
      artists: this.editProductForm.value.artistsFormControl,
      typeOfGame: this.editProductForm.value.typeOfGameFormControl,
      price: this.editProductForm.value.priceFormControl,
    };
  }

  ngOnInit() {}

  editProduct(): void {
    if (this.editProductForm.valid) {
      const product: BoardGame = this.fetchProduct();
      this.dialogRef.close(product);
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
