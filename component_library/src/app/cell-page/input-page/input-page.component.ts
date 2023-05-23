import { Component } from '@angular/core';
import { AlloyButtonIcon, AlloyInputType, AlloyTabButton } from 'alloymobile-angular';
import InputDB from './input-page.data.json';

@Component({
  selector: 'app-input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.css']
})
export class InputPageComponent {
  inputIcons: AlloyInputType[];
  inputTexts: AlloyInputType[];
  inputFloatingTexts: AlloyInputType[];
  example: AlloyInputType;
  usageString: string;
  exampleData: string;
  outputString: string;
  usageBar: AlloyTabButton;
  tab: AlloyButtonIcon;
  constructor(){
    this.usageString = '<alloy-input [input]="input"></alloy-input>';
    this.inputIcons = InputDB.inputIcons.map((input)=>new AlloyInputType(input));
    this.inputTexts = InputDB.inputTexts.map((input)=>new AlloyInputType(input));
    this.inputFloatingTexts = InputDB.inputFloatingTexts.map((input)=>new AlloyInputType(input));
    this.example = new AlloyInputType();
    this.exampleData = JSON.stringify(this.example.toString(),null,2);
    this.outputString = "";
    this.usageBar = new AlloyTabButton(InputDB.tabBar);
    this.tab = this.usageBar.tabs[0];
  }

  inputClick(input: AlloyInputType){
    this.example = input;
    this.exampleData = JSON.stringify(this.example.toString(),null,2);
    this.update();
  }

  update(){
    this.example = new AlloyInputType(JSON.parse(this.exampleData));
  }

  onInput(form){
    this.outputString = JSON.stringify(form);
  }

  getSelected(tab: AlloyButtonIcon){
    this.tab = tab;
  }
}

