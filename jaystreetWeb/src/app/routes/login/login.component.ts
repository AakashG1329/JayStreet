import { Component } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
declare const inputDesign:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!:FormGroup;
/**
 *
 */
constructor(private router: Router,private fb:FormBuilder) {
 this.loginForm=this.fb.group({
  email:[''],
  password:['']
 })
}
  ngOnInit():void{
    
inputDesign();
}
submit(){
  if(this.loginForm.value.email=="demo" && this.loginForm.value.password=="demo@123" || this.loginForm.value.email=="admin" && this.loginForm.value.password=="admin@123"){
    this.router.navigateByUrl('products');
  }
}
}
