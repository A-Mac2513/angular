import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl} from '@angular/forms';
import { Register } from '../register.model';

@Component({
  selector: 'alloy-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  _register: Register;

  @Input() set register(register: Register){
    this._register = register;
  };

  @Output() output: EventEmitter<AbstractControl<any,any>> = new EventEmitter<AbstractControl<any,any>>();

  constructor() {
    this._register = new Register();
  }
}
