import { Injectable } from '@angular/core';
import { Product } from '../Products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];

  constructor() { }

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItem(product: Product) {
    return this.items;
  }

  clearCart(product: Product) {
    this.items = [];
    return this.items;
  }
}
