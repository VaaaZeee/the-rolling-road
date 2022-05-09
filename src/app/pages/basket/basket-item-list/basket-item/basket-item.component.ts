import { Component, Input, OnInit } from '@angular/core';
import { BasketItem } from 'src/app/core/models/basket.model';
import { BoardGame } from 'src/app/core/models/product.models';
import { BasketService } from 'src/app/core/services/basket/basket.service';

@Component({
  selector: 'app-basket-item',
  templateUrl: './basket-item.component.html',
  styleUrls: ['./basket-item.component.scss'],
})
export class BasketItemComponent implements OnInit {
  @Input() basketItem: BasketItem | undefined;
  constructor(private basketService: BasketService) {}

  ngOnInit() {}

  decreaseQuantity(): void {
    if (this.basketItem) {
      this.basketService.removeFromBusket(this.basketItem.product.id);
    }
  }

  increaseQuantity(): void {
    if (this.basketItem) {
      this.basketService.adToBusket(this.basketItem.product.id);
    }
  }
}
