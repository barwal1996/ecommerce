import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AuthenticationService} from '../services/authentication.service';
import { FormBuilder, FormGroup, Validator, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  loginForm:FormGroup;
    username = 'admin'
    password = 'admin'
    invalidLogin = false
    errorMessage = 'Invalid Credentials';
    successMessage: string;
    loginSuccess = false;
  
  
    constructor(private router:Router,private loginService:AuthenticationService,loginFB: FormBuilder) {

     
    this.loginForm = loginFB.group({
  
      name: ['', Validators.required],
      password: ['', Validators.minLength(8)],
      email: ['', Validators.email]
    })
  }
  
    checkLogin(){
      if(this.loginService.authenticate(this.username,this.password)){
        this.router.navigate([''])
        this.invalidLogin=false;
        this.loginSuccess=true;
        this.successMessage='Login Successful';
      }
      else
      this.invalidLogin=true;
      this.loginSuccess=false;
    }
  
    ngOnInit(): void {
    }
  
  }