import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { Observable } from'rxjs';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

    private baseUrl="http://localhost:9090";
    constructor(private http:HttpClient) { }


    orderList(phoneNo:number): Observable<any> {
        return this.http.get(`${this.baseUrl}/orders/${phoneNo}` ,{ responseType: 'text' });
      }
   
    }