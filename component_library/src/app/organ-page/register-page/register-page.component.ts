import { Component} from '@angular/core';
import { Register} from 'alloymobile-angular';
import RegisterDB from './register-page.data.json';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent{
  register: Register;
  constructor(){
    this.register = new Register(RegisterDB);
  }

  onRegister(register){
    console.log(register);
  }
}
