import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(
    private http: HttpClient
  ) { }

  getProducts() {
    return this.http.get('https://pcat.mobile.xfinity.com/products');
  }
}
