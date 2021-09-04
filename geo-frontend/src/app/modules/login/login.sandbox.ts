import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { NzMessageService } from "ng-zorro-antd/message";
import { LoginRequest } from "src/app/model/loginRequest";
import { LoginHttpService } from "../core/http/login-http.service";

@Injectable({
  providedIn: 'root'
})
export class LoginSandbox {

  constructor(private httpLoginService: LoginHttpService,
              private nzMessage:NzMessageService,
              private router: Router){}

  login(request:LoginRequest):void {
    this.httpLoginService.login(request)
    .subscribe(res => {
      this.nzMessage.success(`Bienvenido ${res.username}!`);
      this.router.navigate(['/home']);
    },error => {
      this.nzMessage.error(error.error);
    });
  }

  logOut():void {

  }
}
