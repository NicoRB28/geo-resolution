import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeFormComponent } from './home-form/home-form.component';
import { ShareModule } from '../share/share.module';
import { RouterModule } from '@angular/router';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { HomeResponseComponent } from './home-response/home-response.component';



@NgModule({
  declarations: [HomeFormComponent, HomeDashboardComponent, HomeResponseComponent],
  imports: [
    CommonModule,
    ShareModule,
    RouterModule,
  ]
})
export class HomeModule { }
