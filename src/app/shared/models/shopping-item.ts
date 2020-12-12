import { AppUser } from './app-user';
import { Product } from './product';

// Reprents a shopping (list of produts) in cart
export interface ShoppingItem {
  id?: number; // to identify this object
  name?: string; // name of the cart
  description?: string; // small description
  products?: Product[]; // to store  products when user press addTo Cart
  client?: AppUser;
}
