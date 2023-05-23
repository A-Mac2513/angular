import { Component } from '@angular/core';
import { Forget } from 'alloymobile-angular';
import ForgetDB from './forget-page.data.json';
@Component({
  selector: 'app-forget-page',
  templateUrl: './forget-page.component.html',
  styleUrls: ['./forget-page.component.css']
})
export class ForgetPageComponent {
  forget: Forget;
  constructor(){
      this.forget = new Forget(ForgetDB);
    }
  
  
  onForget(forget){
    console.log(forget);
  }
}
