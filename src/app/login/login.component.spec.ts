import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from "@angular/forms";
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
 

    let loginFormComponent: LoginComponent;
   
    // beforeEach(() => {
   
    // loginFormComponent = new LoginComponent(new FormBuilder);
   
    // })
   
    it('should create a form with 3 controls', () => {
   
    expect(loginFormComponent.loginForm.contains('name')).toBe(true);
    expect(loginFormComponent.loginForm.contains('password')).toBeTruthy();
    expect(loginFormComponent.loginForm.contains('email')).toBeTruthy();
   
    })
   
    it('should make the name control required', () => {
   
    let nameControl = loginFormComponent.loginForm.get('name');
   
    nameControl.setValue('admin');
   
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







//   let component: LoginComponent;
//   let fixture: ComponentFixture<LoginComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ LoginComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(LoginComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
