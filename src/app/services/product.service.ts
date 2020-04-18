import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from'rxjs'; //handling asnychronous request from springboot
/**
 * Angular makes use of observables as an interface to handle a variety of common asynchronous operations.
 * You can define custom events that send observable output data from a child to a parent component.
The HTTP module uses observables to handle AJAX requests and responses.
The Router and Forms modules use observables to listen for and respond to user-input events.
 */


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl='http://localhost:9090/products';
  constructor(private http:HttpClient) { }

  getProductsList(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }
  getProduct(productId:string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${productId}`);
    }

    newProduct(product: Object): Observable<Object> {
      return this.http.post(`${this.baseUrl}`, product);
      }

      updateProduct(productId:string,value:any): Observable<Object>{
        return this.http.put(`${this.baseUrl}/${productId}`, value);
      }
      deleteProduct(productId:string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${productId}`, { responseType: 'text' });
  }

}
