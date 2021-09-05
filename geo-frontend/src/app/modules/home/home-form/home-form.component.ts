import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocationRequest } from 'src/app/model/locationRequest';
import { LocationResponse } from 'src/app/model/locationResponse';

@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.css']
})
export class HomeFormComponent implements OnInit {

   @Output()
   onSubmit:EventEmitter<any> = new EventEmitter();

  form: FormGroup;


  constructor(private fb:FormBuilder) {
    this.form = this.fb.group({
      lat:['',[Validators.required]],
      lng:['',[Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  submitForm():void {
    const request:LocationRequest = {lat:this.form.controls['lat'].value, lng:this.form.controls['lng'].value};
    this.onSubmit.emit(request);
  }

}
