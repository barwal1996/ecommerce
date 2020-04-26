import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { CustomerService} from '../services/customer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  customer: Customer=new Customer();
  message:any;
 
  constructor(private service:CustomerService) { }

  ngOnInit() {
  }

  public registerNow(){
     let resp=this.service.doRegistration(this.customer);
    resp.subscribe((data)=>this.message=data);
  }

}