import { Component } from '@angular/core';
import { User } from './model/user';
import { LoginSandbox } from './modules/login/login.sandbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'geo-frontend';
  user:User;

  constructor(private loginSandbox:LoginSandbox){
    this.loginSandbox.user.subscribe(data => this.user = data);
  }
}
