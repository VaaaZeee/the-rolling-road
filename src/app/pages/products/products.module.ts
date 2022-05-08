import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './product/product.component';
import { MatCardModule } from '@angular/material/card';
import { EditProductComponent } from './edit-product/edit-product.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { IconModule } from 'src/app/shared/icon/icon.module';
import { AddProductModule } from './add-product/add-product.module';
import { MatMenuModule } from '@angular/material/menu';
import { EditProductModule } from './edit-product/edit-product.module';
import { ConfirmDialogModule } from 'src/app/shared/confirm-dialog/confirm-dialog.module';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    IconModule,
    AddProductModule,
    MatMenuModule,
    EditProductModule,
    ConfirmDialogModule,
  ],
  declarations: [ProductsComponent, ProductComponent],
})
export class ProductsModule {}
