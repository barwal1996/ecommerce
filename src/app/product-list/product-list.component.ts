import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';
import { Product } from "../models/product";
import{ProductService} from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Observable<Product[]>;// array form data
  
  constructor(private productService: ProductService,
  private router: Router) { }
  
  ngOnInit(): void {
  this.reloadData();
  }
  reloadData()
  {
  this.products = this.productService.getProductsList();//produt consist of data
  }
  
  productDetails(productId:string)
  {
  this.router.navigate(['details',productId])
  }
  
  editProduct(productId:string)
  {
  this.router.navigate(['update',productId])
  
  }
  deleteProduct(productId:string) {
      this.productService.deleteProduct(productId).subscribe(data => { console.log(data); this.reloadData(); }, error => console.log(error));
    }
  
  
  }
