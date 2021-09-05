import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { LoginSandbox } from "../../login/login.sandbox";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(private router:Router,private loginSandbox:LoginSandbox){}

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot){
    const currentUser = this.loginSandbox.userValue();
    if(currentUser){
      return true;
    }

    this.router.navigate(['/login'],{queryParams: {returnUrl: state.url}});
    return false;
  }


}
