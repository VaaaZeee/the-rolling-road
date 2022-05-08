import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { IconModule } from 'src/app/shared/icon/icon.module';
import { FilePickerModule } from 'ngx-awesome-uploader';
import { EditProductComponent } from './edit-product.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    IconModule,
    FilePickerModule,
  ],
  declarations: [EditProductComponent],
  exports: [EditProductComponent],
})
export class EditProductModule {}
