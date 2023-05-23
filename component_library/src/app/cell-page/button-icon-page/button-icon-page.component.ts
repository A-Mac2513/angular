import { Component } from '@angular/core';
import ButtonIconDB from "./button-icon-page.data.json"
import { AlloyButtonIcon } from 'alloymobile-angular';

@Component({
  selector: 'app-button-icon-page',
  templateUrl: './button-icon-page.component.html',
  styleUrls: ['./button-icon-page.component.css']
})
export class ButtonIconPageComponent {
  buttonIcons: AlloyButtonIcon[];
  usageString: string;
  example: AlloyButtonIcon;
  exampleData: string;
  constructor(){
    this.usageString = '<alloy-button-icon [buttonIcon]="buttonIcon"></alloy-button-icon>';
    this.example = new AlloyButtonIcon();
    this.exampleData = JSON.stringify(this.example,null,2);
    this.buttonIcons = ButtonIconDB.buttonIcons.map((button)=>new AlloyButtonIcon(button))
  }

  buttonIconClick(buttonIcon: AlloyButtonIcon){
    this.exampleData = JSON.stringify(buttonIcon,null,2);
    this.update();
  }

  update(){
    this.example = new AlloyButtonIcon(JSON.parse(this.exampleData));
  }
}
