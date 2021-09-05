import { Injectable } from "@angular/core";
import { NzMessageService } from "ng-zorro-antd/message";
import { Observable, Subject } from "rxjs";
import { LocationResponse } from "src/app/model/locationResponse";
import { LocationHttpService } from "../core/http/location-http.service";

@Injectable({
  providedIn: 'root'
})
export class HomeSandbox {

  public location$:Subject<LocationResponse> = new Subject();

  constructor(private httpHomeService: LocationHttpService,
              private nzMessage:NzMessageService){}

  getDataLocation(lat:string, lng:string): void{
    this.httpHomeService.getData(lat,lng)
    .subscribe(res => {
      this.location$.next(res);
    },error => {
      this.nzMessage.error(error.error.message);
      this.location$.next(null);
    });
  }

}
