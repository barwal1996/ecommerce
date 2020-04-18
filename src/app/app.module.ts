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



const appRoutes: Routes = [
  {
    path: 'dashboard', component: HeaderComponent, 
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'productList',component:ProductListComponent},
      {path:'productDetails',component:ProductDetailsComponent},
      {path: 'addProduct',component:CreateProductComponent},
      {path:'updateProduct',component:UpdateProductComponent}
    ]
  },
  { path: 'login', component: LoginComponent , pathMatch: 'full'},
  { path: '', component: IndexComponent}
];

@NgModule({
  declarations: [
    AppComponent, HomeComponent, LoginComponent, HeaderComponent, AboutComponent, LogoutComponent, CreateProductComponent, ProductListComponent, UpdateProductComponent, ProductDetailsComponent, IndexComponent,MainHeaderComponent
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


 

