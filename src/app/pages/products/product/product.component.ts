import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BoardGame } from 'src/app/core/models/product.models';
import { BasketService } from 'src/app/core/services/basket/basket.service';
import { ProductService } from 'src/app/core/services/product/product.service';
import { UserService } from 'src/app/core/services/user/user.service';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
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
    public productService: ProductService,
    public basketService: BasketService,
    public userService: UserService
  ) {}

  ngOnInit() {}

  addToCart(): void {
    if (this.product) {
      this.basketService.adToBusket(this.product.id);
    }
  }

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

  openDeleteDialog(): void {
    this.dialog
      .open(ConfirmDialogComponent, {
        panelClass: 'custom-dialog-container',
        data: 'Confirm to delete this product.',
      })
      .afterClosed()
      .subscribe((res: boolean) => {
        if (res && this.product) {
          this.productService.deleteProductById(this.product.id);
        }
      });
  }

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
