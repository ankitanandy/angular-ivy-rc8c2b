import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  readonly apiurl = 'https://fakestoreapi.com/products';
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiurl);
  }

  getProduct(id: number): Observable<Product> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.

    return this.http.get<Product>(this.apiurl + '/' + id);
  }
}
