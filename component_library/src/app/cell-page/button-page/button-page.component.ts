import { Component } from '@angular/core';
import { AlloyButton} from 'alloymobile-angular';
import ButtonDB from "./button.data.json"
@Component({
  selector: 'app-button-page',
  templateUrl: './button-page.component.html',
  styleUrls: ['./button-page.component.css']
})
export class ButtonPageComponent {
  buttons: AlloyButton[];
  usageString: string;
  example: AlloyButton;
  exampleData: string;
  constructor(){
    this.usageString = '<alloy-button [button]="button"></alloy-button>';
    this.example = new AlloyButton();
    this.exampleData = JSON.stringify(this.example,null,2);
    this.buttons = ButtonDB.buttons.map((button)=>new AlloyButton(button))
  }

  buttonClick(button: AlloyButton){
    this.exampleData = JSON.stringify(button,null,2);
    this.update();
  }

  update(){
    this.example = new AlloyButton(JSON.parse(this.exampleData));
  }
}
