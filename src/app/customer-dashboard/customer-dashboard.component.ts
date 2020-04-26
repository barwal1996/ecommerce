import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {

  sess:any;

  

  constructor(private route: ActivatedRoute, private router: Router,private customerservice:CustomerService ) { }

  ngOnInit() {
    this.sess=sessionStorage.getItem('emailid');
    console.log("herllooooooooo");
    console.log(this.sess.toString());
    
  }
  onUpdate() {
    this.router.navigate(['/viewProfile']);
  }
  onOrder(){
    this.router.navigate(['/orderList']);
  }

}
