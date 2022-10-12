import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getAllItems(): Observable<any> {
    return this.http.get('https://dummyjson.com/products');
  }

  getProductById(productId: number): Observable<any> {
    return this.http.get(`https://dummyjson.com/products/${productId}`);
  }
}
