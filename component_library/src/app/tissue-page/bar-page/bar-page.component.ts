import { Component } from '@angular/core';
import { AlloyButtonBar, AlloyButtonIcon, AlloyLink, AlloyLinkBar, AlloyTabButton, Bar } from 'alloymobile-angular';
import ButtonBarDB from "./bar-page.data.json";
@Component({
  selector: 'app-bar-page',
  templateUrl: './bar-page.component.html',
  styleUrls: ['./bar-page.component.css']
})
export class BarPageComponent {
  buttonBar: AlloyButtonBar;
  buttonIconBar: AlloyButtonBar;
  iconBar: AlloyButtonBar;
  linkBar: AlloyLinkBar;
  linkIconBar: AlloyLinkBar;
  iconLinkBar: AlloyLinkBar;
  example: Bar;
  usageString: string;
  outputString: string;
  exampleData: string;
  usageBar: AlloyTabButton;
  tab: AlloyButtonIcon;
  constructor(){
    this.usageString = '<alloy-link-bar [linkBar]="linkBar" (output)="onClick($event)"></alloy-link-bar>';
    this.example = new AlloyLinkBar();
    this.exampleData = JSON.stringify(this.example,null,2);
    this.buttonBar = new AlloyButtonBar(ButtonBarDB.buttonBar);
    this.buttonIconBar = new AlloyButtonBar(ButtonBarDB.buttonIconBar);
    this.iconBar = new AlloyButtonBar(ButtonBarDB.iconBar);
    this.linkBar = new AlloyLinkBar(ButtonBarDB.linkBar);
    this.linkIconBar = new AlloyLinkBar(ButtonBarDB.linkIconBar);
    this.iconLinkBar = new AlloyLinkBar(ButtonBarDB.iconLinkBar);
    this.usageBar = new AlloyTabButton(ButtonBarDB.tabBar);
    this.tab = this.usageBar.tabs[0];
    this.outputString = "";
  }

  onclick(data){
    this.outputString = JSON.stringify(data.tostring());
  }

  onBarClick(data){
    this.exampleData = JSON.stringify(data.toString(),null,2);
    this.update();
  }

  update(){
    this.example = new AlloyLinkBar(JSON.parse(this.exampleData));
  }

  getSelected(tab: AlloyButtonIcon){
    this.tab = tab;
  }
}
