import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
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
    imageFormControl: new FormControl(null, [Validators.required]),
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

  constructor(public dialogRef: MatDialogRef<AddProductComponent>) {}

  ngOnInit() {}

  addProduct(): void {
    console.log(this.addProductForm.value);
  }

  close(): void {
    this.dialogRef.close();
  }
}
