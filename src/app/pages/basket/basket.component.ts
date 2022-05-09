import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/core/services/basket/basket.service';
import { ProductService } from 'src/app/core/services/product/product.service';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent implements OnInit {
  constructor(
    public userService: UserService,
    public productService: ProductService,
    private basketService: BasketService
  ) {}

  ngOnInit() {}

  order(): void {
    this.basketService.saveOrder();
  }
}
