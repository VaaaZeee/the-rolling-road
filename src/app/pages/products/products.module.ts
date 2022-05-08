import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './product/product.component';
import { MatCardModule } from '@angular/material/card';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { IconModule } from 'src/app/shared/icon/icon.module';
import { AddProductModule } from './add-product/add-product.module';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    IconModule,
    AddProductModule,
  ],
  declarations: [ProductsComponent, ProductComponent, EditProductComponent],
})
export class ProductsModule {}
