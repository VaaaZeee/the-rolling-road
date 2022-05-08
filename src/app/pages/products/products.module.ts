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

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    IconModule,
    AddProductModule,
  ],
  declarations: [ProductsComponent, ProductComponent, EditProductComponent],
})
export class ProductsModule {}
