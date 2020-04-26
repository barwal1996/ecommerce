import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import {Router,ActivatedRoute} from '@angular/router';
import {Customer} from '../models/customer';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  phoneNo:number;
  sess:any;
  customer: Customer;
  constructor(private route: ActivatedRoute, private router: Router, private customerservice:CustomerService) { }

  ngOnInit(): void {
    this.customer=new Customer();

   this.sess=JSON.parse(sessionStorage.getItem('phoneNo'));
   console.log(this.sess);
   // this.sess.subscribe(data=>{this.phoneNo=data.phoneNo});
    // this.phoneNo = this.route.snapshot.params[('''phoneNo'];
this.phoneNo=this.sess;
    this.customerservice.FindCustomers(this.phoneNo)
      .subscribe(data => {
        console.log(data)
        this.customer = data;
      }, error => console.log(error));
  }

  
  onUpdate() {
 
      this.router.navigateByUrl('customerDashboard/viewProfile');
  }
  }
