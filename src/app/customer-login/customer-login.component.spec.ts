import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from "@angular/forms";
import { CustomerLoginComponent } from './customer-login.component';
import { CustomerService } from '../services/customer.service';
import { Router,ActivatedRoute } from '@angular/router';
import { advanceActivatedRoute } from '@angular/router/src/router_state';

describe('CustomerLoginComponent', () => { 

  let loginFormComponent: CustomerLoginComponent;
 
  // beforeEach(() => {
  // loginFormComponent = new CustomerLoginComponent (new  FormBuilder,CustomerService,Router,ActivatedRoute);
 
  // })

  it('should create a form with 3 controls', () => {
 
  expect(loginFormComponent.loginForm.contains('name')).toBe(true);
  expect(loginFormComponent.loginForm.contains('password')).toBeTruthy();
  expect(loginFormComponent.loginForm.contains('email')).toBeTruthy();
 
  })
 
  it('should make the name control required', () => {
 
  let nameControl = loginFormComponent.loginForm.get('name');
 
  nameControl.setValue('');
 
  expect(nameControl.valid).toBeFalsy();
 
  })
 
  it('should use password with minimum 8 characters', () => {
 
  let passwordControl = loginFormComponent.loginForm.get('password');
 
  passwordControl.setValue('12345678')
 
  expect(passwordControl.valid).toBeTruthy();
 
  })
 
  it('should validate the email input type', () => {
 
  let emailControl = loginFormComponent.loginForm.get('email');
 
  emailControl.setValue('dinanathj@gmail.com')
 
  expect(emailControl.valid).toBeTruthy();
 
  });
 
 }); 
//   let component: CustomerLoginComponent;
//   let fixture: ComponentFixture<CustomerLoginComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ CustomerLoginComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(CustomerLoginComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
