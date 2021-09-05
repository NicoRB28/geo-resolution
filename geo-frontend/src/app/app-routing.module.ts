import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './modules/core/guard/auth.guard';
import { HomeDashboardComponent } from './modules/home/home-dashboard/home-dashboard.component';
import { LoginFormComponent } from './modules/login/login-form/login-form.component';

const routes: Routes = [
  {path:'',component:LoginFormComponent},
  {path:'login', component:LoginFormComponent},
  {path:'home', component:HomeDashboardComponent,canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
