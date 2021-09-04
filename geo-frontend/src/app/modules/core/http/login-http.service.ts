import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginRequest } from "src/app/model/loginRequest";
import { LoginResponse } from "src/app/model/loginResponse";
import { environment } from "src/environments/environment";

@Injectable({providedIn:'root'})
export class LoginHttpService {

  private baseUrl = `${environment.backendApi}login`;

  constructor(private http:HttpClient){}

  login(request:LoginRequest): Observable<LoginResponse>{
    return this.http.post<LoginResponse>(`${this.baseUrl}/`,request);
  }
}
