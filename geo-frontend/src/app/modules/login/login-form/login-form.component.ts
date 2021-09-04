import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginRequest } from 'src/app/model/loginRequest';
import { LoginSandbox } from '../login.sandbox';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  form:FormGroup;

  constructor(private fb:FormBuilder,
              private sandbox: LoginSandbox) {
    this.form = this.fb.group({
      user:['',Validators.required],
      password:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  submitForm(){
    const request: LoginRequest = {username:this.form.controls["user"].value, password: this.form.controls["password"].value};
    this.sandbox.login(request);
  }
}
