import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Product } from '../models/product';
import {Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product :Product =new Product();
  submitted: boolean;
  constructor(private productService :ProductService,private router:Router)  { }

  category = ['TV', 'Mobile',  
  'Laptop', 'Washing Machine']; 

  ngOnInit(): void {
  }
  newProduct(): void {
    this.submitted = false;
    this.product= new Product();
    }

    save() {
    this.productService.newProduct(this.product)
    .subscribe(data => console.log(data), error => console.log(error));
    this.product= new Product();
    this.gotoList();
    }

    onSubmit() {
    this.submitted = true;
    this.save();
    }

    gotoList() {
    this.router.navigate(['/products']);
    }

}
