import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LocationResponse } from "src/app/model/locationResponse";
import { environment } from "src/environments/environment";

@Injectable({providedIn:'root'})
export class LocationHttpService {

  private baseUrl = `${environment.backendApi}geo`;

  constructor(private http: HttpClient){}

  getData(lat:string,lng:string):Observable<LocationResponse>{
    return this.http.get<LocationResponse>(`${this.baseUrl}/${lat}/${lng}`);
  }

}
