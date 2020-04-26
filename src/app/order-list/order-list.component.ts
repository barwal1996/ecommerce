import { Component, OnInit } from '@angular/core';
import {OrderService} from '../services/order.service';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  phoneNo:number;
  orderList:any;
  temp:any;

  constructor(private orderService:OrderService,private router:Router) { }

  ngOnInit() {
    
  this.phoneNo =  parseInt(sessionStorage.getItem('phoneNo'));

  let resp=this.orderService.orderList(this.phoneNo);

  resp.subscribe(data => {
    console.log(data);
    this.orderList = JSON.parse(data);
    console.log(this.orderList);

    this.temp=this.orderList.orderId;
    console.log(this.temp[1]);
  }


  )}}