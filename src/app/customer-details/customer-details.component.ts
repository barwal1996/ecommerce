import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {CustomerService} from '../services/customer.service';
import {Customer} from '../models/customer';
import { from } from 'rxjs';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
    phoneNo:number;
    customer:Customer;
    constructor(private route: ActivatedRoute, private router: Router, private customerservice:CustomerService) { }
  
    ngOnInit(): void {
     this.customer=new Customer();
      this.phoneNo = this.route.snapshot.params['phoneNo'];
  
      this.customerservice.getCustomerByphoneNo(this.phoneNo)
        .subscribe(data => {
          console.log(data)
          this.customer = data;
        }, error => console.log(error));
    }
    custList() {
      this.router.navigate(['/customerList']);
    }
    
 

  }