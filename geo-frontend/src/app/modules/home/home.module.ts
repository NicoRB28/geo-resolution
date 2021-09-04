import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeFormComponent } from './home-form/home-form.component';
import { ShareModule } from '../share/share.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HomeFormComponent],
  imports: [
    CommonModule,
    ShareModule,
    RouterModule,
  ]
})
export class HomeModule { }
