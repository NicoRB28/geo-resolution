import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { LoginSandbox } from "../../login/login.sandbox";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private loginSandbox:LoginSandbox){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError(err => {
      if([401,403].includes(err.status)){
        this.loginSandbox.logOut();
      }

      return throwError(err);
    }))
  }

}
