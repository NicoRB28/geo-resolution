import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { NzMessageService } from "ng-zorro-antd/message";
import { BehaviorSubject, Observable } from "rxjs";
import { LoginRequest } from "src/app/model/loginRequest";
import { User } from "src/app/model/user";
import { LoginHttpService } from "../core/http/login-http.service";
import { UserQuery } from "../state/query";
import {UserStore } from "../state/store";

@Injectable({
  providedIn: 'root'
})
export class LoginSandbox {

  private user$:BehaviorSubject<User>;
  public user: Observable<User>;

  constructor(private httpLoginService: LoginHttpService,
              private nzMessage:NzMessageService,
              private router: Router){

      this.user$ = new BehaviorSubject<User>(null);
      this.user = this.user$.asObservable();

  }

  userValue(): User {
    return this.user$.value;
  }

  login(request:LoginRequest):void {
    this.httpLoginService.login(request)
    .subscribe(res => {
      this.nzMessage.success(`Bienvenido ${res.username}!`);
      const userLogedIn: User = {username:res.username, token:res.token};
      this.user$.next(userLogedIn);
      this.router.navigate(['/home']);
    },error => {
      this.nzMessage.error(error.error);
    });
  }

  logOut():void {
    this.user$.next(null);
    this.router.navigate(['/login']);
  }

}
