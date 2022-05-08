import { Component, OnInit } from '@angular/core';
import { BoardGame } from 'src/app/core/models/product.models';
import { ProductService } from 'src/app/core/services/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(public productService: ProductService) {}

  ngOnInit() {}
}
