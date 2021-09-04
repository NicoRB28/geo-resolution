import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';




@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    CommonModule,
    RouterModule,
    ShareModule,
  ]
})
export class LoginModule { }
