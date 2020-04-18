import { Component, OnInit } from '@angular/core';
import {Observable, from} from "rxjs";
import {Product}  from '../models/product';
import {Router,ActivatedRoute} from '@angular/router';
import{ProductService}  from '../services/product.service'; 

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  productId:string
  product:Product;
  submitted=false;
  products:Observable<Product[]>;

  category = ['TV', 'Mobile',  
'Laptop', 'Washing Machine']; 

  constructor(private route:ActivatedRoute,private router:Router,private productService:ProductService) {

   }

  ngOnInit(): void {
    
 this.product = new Product();
   

    this.productId = this.route.snapshot.params['productId'];
    
    this.productService.getProduct(this.productId)
      .subscribe(data => {
        console.log(data)
        this.product = data;
      }, error => console.log(error));
  }
  onUpdate(){
    this.updateProduct();
  }
  reloadData(){
    this.products=this.productService.getProductsList();
  }
  gotoList(){
    this.router.navigate(['/products']);
  }

  updateProduct(){
    this.productService.updateProduct(this.productId,this.product)
    .subscribe(data => console.log(data), error=>console.log(error));
    this.product=new Product();
    this.reloadData();
    this.gotoList();
  }


}


