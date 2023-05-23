import { Component } from '@angular/core';
import { Login} from 'alloymobile-angular';
import LoginDB from './login-page.data.json';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent{
  login: Login;
  usageString: string;
  exampleData: string;
  outputString: string;
  constructor() {
    this.usageString = '<alloy-login [login]="login" (output)="onLogin($event)"></alloy-login>';
    this.login = new Login(LoginDB);
    this.exampleData = JSON.stringify(LoginDB, null, 2);
    this.outputString = "";
  }

  onLogin(form){
    this.outputString = JSON.stringify(form);
    this.login = new Login(JSON.parse(this.exampleData));
  }


  update(){
    this.login = new Login(JSON.parse(this.exampleData));
  }
}
