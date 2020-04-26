import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from'rxjs';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

    private baseUrl='http://localhost:9090/customers';
    private baseUrl1="http://localhost:9090";
    constructor(private http:HttpClient) { }


  
    // getCustomers(phoneNo: number): Observable<any> {
    //   return this.http.get(`${this.baseUrl}/${phoneNo}`);
    //   }


  public doRegistration(customer){
    return this.http.post("http://localhost:9090/register",customer,{responseType:'text' as 'json'});
  }
   
  getCustomers(): Observable<any> {
    let customerList=this.http.get(`${this.baseUrl}`);
    customerList.subscribe(data=>{console.log(data)});
    return customerList;
    }
  //  public  getCustomer(customer){
  //   return this.http.post("http://localhost:9090/findCustomer",customer,{responseType:'text' as 'json'});
  //  }

    updateCustomer(phoneNo: number, value: any): Observable<Object> {
      return this.http.put(`${this.baseUrl}/${phoneNo}`, value);
    }

  deleteCustomer(phoneNo: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${phoneNo}`, { responseType: 'text' });
  }
  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text' });
  }

  public deleteUser(phoneNo:number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${phoneNo}`);
 
}
getCustomerByphoneNo(phoneNo:number): Observable<any> {
  return this.http.get(`${"http://localhost:9090/findCustomer/"}/${phoneNo}`);

}

FindCustomers(phoneNo:any): Observable<any>{
  return this.http.get(`${this.baseUrl1}/findCustomer/${phoneNo}`);
}
public  FindCustomer(phoneNo:any): Observable<any>{
  return this.http.get(`${this.baseUrl1}/findCustomer/${phoneNo}`,{responseType:'text' as 'json'});
}

// public  FindCustomers(phoneNo:any): Observable<any>{
//   return this.http.post(`${this.baseUrl}/findCustomer/${phoneNo}`,{responseType:'text' as 'json'});
// }

public doLogin(customer):Observable<any>{
  return this.http.post("http://localhost:9090/login",customer,{responseType:'text' as 'json'});
}
  }