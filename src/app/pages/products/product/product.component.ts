import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BoardGame } from 'src/app/core/models/product.models';
import { AddProductComponent } from '../add-product/add-product.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() public product: BoardGame | undefined = undefined;
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  addProduct(): void {
    this.dialog.open(AddProductComponent, {
      panelClass: 'custom-dialog-container',
    });
  }
}
