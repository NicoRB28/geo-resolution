import { Component, Input, OnInit } from '@angular/core';
import { LocationResponse } from 'src/app/model/locationResponse';

@Component({
  selector: 'app-home-response',
  templateUrl: './home-response.component.html',
  styleUrls: ['./home-response.component.css']
})
export class HomeResponseComponent implements OnInit {

  @Input('location')
  location:LocationResponse;

  constructor() { }

  ngOnInit(): void {
  }

}
