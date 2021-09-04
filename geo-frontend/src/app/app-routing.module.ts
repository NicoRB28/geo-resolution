import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeFormComponent } from './modules/home/home-form/home-form.component';
import { LoginFormComponent } from './modules/login/login-form/login-form.component';

const routes: Routes = [
  {path:'login', component:LoginFormComponent},
  {path:'home', component:HomeFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
