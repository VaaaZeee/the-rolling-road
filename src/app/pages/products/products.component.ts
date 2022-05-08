import { Component, OnInit } from '@angular/core';
import { BoardGame } from 'src/app/core/models/product.models';
import { ProductService } from 'src/app/core/services/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public product: BoardGame = {
    id: 'betrayal',
    name: 'Betrayal at House on the Hill',
    brand: 'Avalon Hill',
    categories: "'Halloween', 'Adventure',",
    typeOfGame: "['Dice game'],",
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/the-rolling-road.appspot.com/o/product-images%2F10547.jpg?alt=media&token=37db1de4-f578-46db-9a17-25148a831f93',
    languages: "['English'],",
    shortDescription:
      'Betrayal at House on the Hill quickly builds suspense and excitement as players explore a haunted mansion of their own design, encountering spirits and frightening omens that foretell their fate.',
    playingTimeLower: 30,
    playingTimeUpper: 60,
    minPlayer: 3,
    maxPlayer: 6,
    designers: 'Rob Daviau',
    artists: 'Christopher Moeller',
    age: 12,
    price: 51,
    inStock: 10,
  };
  /* id: string;
  name: string;
  brand: string;
  categories: string[];
  imageUrl: string;
  languages: Language[];
  description: string;
  playingTime: string;
  minPlayer: number;
  maxPlayer: number;
  designers: string[];
  artists: string[];
  age: string;
  price: number;
  inStock: number;
  badge?: Badge; */
  constructor(private productService: ProductService) {}

  ngOnInit() {}
}
