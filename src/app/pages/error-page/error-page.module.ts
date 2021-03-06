import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './error-page.component';
import { ErrorPageRoutingModule } from './basket-routing.module';

@NgModule({
  imports: [CommonModule, ErrorPageRoutingModule],
  declarations: [ErrorPageComponent],
})
export class ErrorPageModule {}
