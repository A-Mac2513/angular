import { Component} from '@angular/core';
import { Reset } from 'alloymobile-angular';
import ResetDB from './reset-page.data.json';
@Component({
  selector: 'app-reset-page',
  templateUrl: './reset-page.component.html',
  styleUrls: ['./reset-page.component.css']
})
export class ResetPageComponent{
  reset: Reset;
  constructor(){
    this.reset = new Reset(ResetDB);
  }


  onReset(form){
    console.log(form)
  }
}
