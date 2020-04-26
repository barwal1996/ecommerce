import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticate(phoneNo,password){
    if(phoneNo === "customer.getPhoneNo" && password === "customer.getPassword")
    {
      sessionStorage.setItem('phoneNo',phoneNo)
      return true;

    }
    else
    {
      return false;
    }
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('phoneNo')
    console.log(!(user===null))
    return !(user===null);
  }

  logOut(){
    sessionStorage.removeItem('phoneNo');
  }

  constructor() { }
}