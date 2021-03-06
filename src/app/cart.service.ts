import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shipping } from './shipping';
import { Product } from './products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];
  constructor(private httpClient: HttpClient) {}

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices():Observable<Shipping[]>{
    return this.httpClient.get<Shipping[]>('/assets/shipping.json');
  }
}
