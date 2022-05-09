import { BoardGame } from './product.models';

export interface BasketItem {
  product: BoardGame;
  quantity: number;
}
