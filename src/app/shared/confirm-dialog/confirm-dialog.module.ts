import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { IconModule } from '../icon/icon.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule, IconModule, MatButtonModule],
  declarations: [ConfirmDialogComponent],
  exports: [ConfirmDialogComponent],
})
export class ConfirmDialogModule {}
