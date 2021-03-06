import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginSandbox } from "../../login/login.sandbox";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private loginSandbox:LoginSandbox) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const user = this.loginSandbox.userValue();
        if(user){
          request = request.clone({
            setHeaders:{Authorization:`Bearer ${user.token}`}
          })
        }
        return next.handle(request);
    }
}
