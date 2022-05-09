import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketComponent } from './basket.component';
import { BasketRoutingModule } from './basket-routing.module';
import { BasketItemListComponent } from './basket-item-list/basket-item-list.component';
import { BasketItemComponent } from './basket-item-list/basket-item/basket-item.component';
import { IconModule } from 'src/app/shared/icon/icon.module';

@NgModule({
  imports: [CommonModule, BasketRoutingModule, IconModule],
  declarations: [BasketComponent, BasketItemListComponent, BasketItemComponent],
})
export class BasketModule {}
