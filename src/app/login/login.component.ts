import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;

  submitted = false;

  msgError = '';

  validate = '';

  constructor(private route : Router) { }

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      email : new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', Validators.required)
    })

  }

  get form(){
    return this.loginForm.controls;
  }

  onSubmit(){

    const emailVal = this.form.email.value;

    const pwdVal = this.form.password.value;

    this.submitted = true
   
    if(emailVal !== "admin@email.com" || pwdVal !== 'admin' || this.loginForm.invalid){
      this.validate = 'is-invalid';
      this.msgError = 'Required';
      return;
    }
    else{

      console.log(emailVal, pwdVal);

      this.route.navigate(['/lazy-modal'])
    }


  }

}
