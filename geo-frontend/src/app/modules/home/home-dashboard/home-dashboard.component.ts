import { Component, OnInit } from '@angular/core';
import { LocationRequest } from 'src/app/model/locationRequest';
import { LocationResponse } from 'src/app/model/locationResponse';
import { HomeSandbox } from '../home.sandbox';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.css']
})
export class HomeDashboardComponent implements OnInit {

  location:LocationResponse;

  constructor(private sandbox:HomeSandbox) { }

  ngOnInit(): void {
    this.sandbox.location$.subscribe(data => this.location = data);
  }

  sendRequest(request:LocationRequest):void{
    this.sandbox.getDataLocation(request.lat,request.lng);
  }
}
