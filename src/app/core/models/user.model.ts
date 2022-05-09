import { Order } from './order.model';
import { BoardGame } from './product.models';

export type UserType = 'User' | 'Admin';

export interface User {
  uid: string;
  email: string;
  userName: string;
  firstName: string;
  lastName: string;
  type: UserType;
  basket: string[];
  orders: Order[];
}
