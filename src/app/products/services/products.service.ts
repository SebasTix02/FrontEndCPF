import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  urlProducts = '/api/products/'
  constructor(private http:HttpClient) {
   }

   loadProducts():Observable<any> {
    console.log(`Esta es la urlProducts: ${this.urlProducts}`)
    return this.http.get(this.urlProducts)
  }

  loadProduct(id:string):Observable<any> {
    return this.http.get(this.urlProducts+id)
  }

  addProduct(product:Product):Observable<any>{
    return this.http.post(this.urlProducts,product)
  }

  updateProduct(id:string, product:Product):Observable<any>{
    return this.http.put(this.urlProducts+id,product)
  }

  deleteProduct(id:string):Observable<any> {
    return this.http.delete(this.urlProducts+id)
  }
}
