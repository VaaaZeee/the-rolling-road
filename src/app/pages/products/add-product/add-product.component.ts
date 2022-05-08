import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CustomFilePickerAdapter } from 'src/app/core/field-picker-adapter/custom-field-picker-adapter';
import { BoardGame } from 'src/app/core/models/product.models';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  public adapter: CustomFilePickerAdapter;
  public image: File | undefined;
  addProductForm = new FormGroup({
    nameFormControl: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    brandFormControl: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    inStockFormControl: new FormControl(0, [
      Validators.required,
      Validators.min(0),
    ]),
    minPlayerFormControl: new FormControl(0, [
      Validators.required,
      Validators.min(0),
    ]),
    maxPlayerFormControl: new FormControl(1, [
      Validators.required,
      Validators.min(0),
    ]),
    ageFormControl: new FormControl(0, [
      Validators.required,
      Validators.min(0),
    ]),
    playingTimeLowerFormControl: new FormControl(0, [
      Validators.required,
      Validators.min(0),
    ]),
    playingTimeUpperFormControl: new FormControl(1, [
      Validators.required,
      Validators.min(0),
    ]),
    categoriesFormControl: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    languageFormControl: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    shortDescriptionFormControl: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    longDescriptionFormControl: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    designersFormControl: new FormControl('', [Validators.required]),
    artistsFormControl: new FormControl('', [Validators.required]),
    typeOfGameFormControl: new FormControl('', [Validators.required]),
    priceFormControl: new FormControl(0, [
      Validators.required,
      Validators.min(0),
    ]),
  });
  constructor(
    private http: HttpClient,
    public dialogRef: MatDialogRef<AddProductComponent>
  ) {
    this.adapter = new CustomFilePickerAdapter(this.http);
  }

  ngOnInit() {}

  fetchProduct(): BoardGame {
    return {
      id: '',
      name: this.addProductForm.value.nameFormControl,
      brand: this.addProductForm.value.brandFormControl,
      inStock: this.addProductForm.value.inStockFormControl,
      minPlayer: this.addProductForm.value.minPlayerFormControl,
      maxPlayer: this.addProductForm.value.maxPlayerFormControl,
      age: this.addProductForm.value.ageFormControl,
      playingTimeLower: this.addProductForm.value.playingTimeLowerFormControl,
      playingTimeUpper: this.addProductForm.value.playingTimeUpperFormControl,
      categories: this.addProductForm.value.categoriesFormControl,
      imageUrl: '',
      languages: this.addProductForm.value.languageFormControl,
      shortDescription: this.addProductForm.value.shortDescriptionFormControl,
      longDescription: this.addProductForm.value.longDescriptionFormControl,
      designers: this.addProductForm.value.designersFormControl,
      artists: this.addProductForm.value.artistsFormControl,
      typeOfGame: this.addProductForm.value.typeOfGameFormControl,
      price: this.addProductForm.value.priceFormControl,
    };
  }

  addProduct(): void {
    if (this.addProductForm.valid && this.image) {
      const product: BoardGame = this.fetchProduct();
      console.log(product);
    }
  }

  imageAdded(file: any): void {
    this.image = file;
  }

  close(): void {
    this.dialogRef.close();
  }
}
