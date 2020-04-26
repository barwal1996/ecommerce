import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent }  from './home/home.component';
import { HeaderComponent }  from './header/header.component';
import { AboutComponent }  from './about/about.component';
import { LoginComponent } from './login/login.component'
import { RouterModule, Routes } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { IndexComponent } from './index/index.component';

import { MainHeaderComponent } from './main-header/main-header.component';
import { RegisterComponent } from './register/register.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import {CustomerDashboardComponent} from './customer-dashboard/customer-dashboard.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { OrderListComponent} from './order-list/order-list.component';

const appRoutes: Routes = [
  {
    path: 'dashboard', component: HeaderComponent, 
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
     
      {path:'productDetails',component:ProductDetailsComponent},
      {path: 'addProduct',component:CreateProductComponent},
      {path:'customerList',component:CustomerListComponent},
      {path:'custdetails',component:CustomerDetailsComponent},
  { path: 'productList',component:ProductListComponent},

  
      
    ]
  },
  {path: 'viewProfile', component:ViewProfileComponent},
  {path: 'orderList', component:OrderListComponent},
  {path:'customerDashboard',component:CustomerDashboardComponent},
  { path: 'customerList',component:CustomerListComponent},
  {path:'custdetails/:phoneNo',component:CustomerDetailsComponent},
  { path: 'productList',component:ProductListComponent},
  {path:'details/:productId',component:ProductDetailsComponent},

  {path:'update/:productId',component:UpdateProductComponent},
  { path:"register",component:RegisterComponent},
  { path: "customerLogin", component:CustomerLoginComponent},
  { path: 'login', component: LoginComponent , pathMatch: 'full'},
  { path: '', component: IndexComponent}
];

@NgModule({
  declarations: [
    AppComponent, HomeComponent, LoginComponent, HeaderComponent, AboutComponent, LogoutComponent,
     CreateProductComponent, ProductListComponent, UpdateProductComponent, ProductDetailsComponent, 
     IndexComponent,MainHeaderComponent, RegisterComponent, CustomerLoginComponent,
      CustomerListComponent, CustomerDetailsComponent,CustomerDashboardComponent, ViewProfileComponent,
      OrderListComponent,
  ],
  imports: [
    BrowserModule,  RouterModule.forRoot(appRoutes),
    
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

