import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';
import {Customer} from '../models/customer';
import { CustomerService } from '../services/customer.service';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
 
    customers: Observable<Customer[]>;// array form data
    
    constructor(private customerservice:CustomerService,
    private router: Router) { }
    
    ngOnInit(): void {
    this.reloadData();
    }

    reloadData()
    {this.customers=this.customerservice.getCustomers();
    }
    
    customerDetails(phoneNo:number)
    {
    this.router.navigate(['/custdetails',phoneNo])
    }
   
    deleteCustomer(phoneNo:number) {
        this.customerservice.deleteUser(phoneNo).subscribe(data => { console.log(data); 
          this.reloadData(); }, error => console.log(error));
      }

    
    
    }