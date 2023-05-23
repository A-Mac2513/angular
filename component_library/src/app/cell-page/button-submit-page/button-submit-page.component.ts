import { Component } from '@angular/core';
import { AlloyButtonSubmit } from 'alloymobile-angular';
import ButtonDB from "../button-page/button.data.json"
@Component({
  selector: 'app-button-submit-page',
  templateUrl: './button-submit-page.component.html',
  styleUrls: ['./button-submit-page.component.css']
})
export class ButtonSubmitPageComponent  {
  buttons: AlloyButtonSubmit[];
  usageString: string;
  example: AlloyButtonSubmit;
  exampleData: string;
  constructor(){
    this.usageString = '<alloy-button-submit [button]="button"></alloy-button-submit>';
    this.example = new AlloyButtonSubmit();
    this.exampleData = JSON.stringify(this.example.tostring(),null,2);
    this.buttons = ButtonDB.submitButtons.map((button)=>new AlloyButtonSubmit(button))
  }

  buttonClick(button: AlloyButtonSubmit){
    this.exampleData = JSON.stringify(button.tostring(),null,2);
    this.update();
  }

  update(){
    this.example = new AlloyButtonSubmit(JSON.parse(this.exampleData));
  }
}