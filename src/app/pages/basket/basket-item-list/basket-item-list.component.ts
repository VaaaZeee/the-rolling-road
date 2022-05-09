import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BasketItem } from 'src/app/core/models/basket.model';
import { BoardGame } from 'src/app/core/models/product.models';
import { User } from 'src/app/core/models/user.model';
import { BasketService } from 'src/app/core/services/basket/basket.service';

@Component({
  selector: 'app-basket-item-list',
  templateUrl: './basket-item-list.component.html',
  styleUrls: ['./basket-item-list.component.scss'],
})
export class BasketItemListComponent
  implements OnInit, AfterViewInit, OnChanges
{
  @Input() user: User | undefined | null;
  @Input() products: BoardGame[] | undefined | null;
  public basketItems$ = new BehaviorSubject<BasketItem[]>([]);
  constructor() {}

  ngOnChanges(): void {
    this.fetchBusketItems();
  }

  ngOnInit() {
    this.fetchBusketItems();
  }

  ngAfterViewInit(): void {
    this.fetchBusketItems();
  }

  fetchBusketItems(): void {
    const basket: BasketItem[] = [];
    this.products?.forEach((product) => {
      const quantity = this.user?.basket?.filter(
        (basketItem) => product.id === basketItem
      ).length;
      if (
        quantity &&
        !basket.some((basketItem) => basketItem.product.id === product.id)
      ) {
        basket.push({ product: product, quantity: quantity });
      }
    });
    this.basketItems$.next(basket);
  }
}
