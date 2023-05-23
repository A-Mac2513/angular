import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl} from '@angular/forms';
import { Login } from '../login.model';

@Component({
  selector: 'alloy-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  _login: Login;
  @Input() set login(login: Login){
    this._login = login;
  };

  @Output() output: EventEmitter<AbstractControl<any,any>> = new EventEmitter<AbstractControl<any,any>>();

  constructor() {
    this._login = new Login();
  }
}
