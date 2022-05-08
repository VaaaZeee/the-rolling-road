import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BoardGame } from 'src/app/core/models/product.models';
import { ProductService } from 'src/app/core/services/product/product.service';
import { AddProductComponent } from '../add-product/add-product.component';
import { EditProductComponent } from '../edit-product/edit-product.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() public product: BoardGame | undefined = undefined;
  constructor(
    public dialog: MatDialog,
    public productService: ProductService
  ) {}

  ngOnInit() {}

  openEditDialog(): void {
    this.dialog
      .open(EditProductComponent, {
        panelClass: 'custom-dialog-container',
        data: this.product,
      })
      .afterClosed()
      .subscribe((product: BoardGame) => {
        if (product) {
          this.productService.editProductInFireStore(product);
        }
      });
  }

  openDeleteDialog(): void {}

  addProduct(): void {
    this.dialog
      .open(AddProductComponent, {
        panelClass: 'custom-dialog-container',
      })
      .afterClosed()
      .subscribe((product: BoardGame) => {
        if (product) {
          this.productService.addProductToFireStore(product);
        }
      });
  }
}
