import { Component } from '@angular/core';
import { AlloyButtonIcon, AlloyIcon, AlloyInputTextIcon, AlloyTabButton } from 'alloymobile-angular';
import IconDB from '../icon-page/icon-page.data.json'
@Component({
  selector: 'app-icon-button-page',
  templateUrl: './icon-button-page.component.html',
  styleUrls: ['./icon-button-page.component.css']
})
export class IconButtonPageComponent {
  iconButtons: AlloyButtonIcon[];
  usageString: string;
  example: AlloyButtonIcon;
  exampleData: string;
  search: AlloyInputTextIcon;
  constructor(){
    this.iconButtons = IconDB.icons.map((icon)=> new AlloyButtonIcon({className:"btn btn-outline-success btn-sm p-1",name:icon.icon,icon:icon}));
    this.usageString = '<alloy-icon-button [iconButton]="iconButton" (output)="getSelected($event)"></alloy-icon-button>';
    this.example = new AlloyButtonIcon();
    this.exampleData = JSON.stringify(this.example.tostring(),null,2);
    this.search = new AlloyInputTextIcon(IconDB.search);
  }

  iconClick(buttonIcon: AlloyButtonIcon){
    this.exampleData = JSON.stringify(buttonIcon.tostring(),null,2);
    this.update();
  }

  update(){
    this.example = new AlloyButtonIcon(JSON.parse(this.exampleData));
  }

  getText(icon){
    let filterIcons = IconDB.icons.filter(i=> i.icon.toLowerCase().includes(icon.search.toLowerCase()));
    if(filterIcons != undefined){
      this.iconButtons = filterIcons.map((icon)=> new AlloyButtonIcon({className:"btn btn-outline-success btn-sm p-1",name:icon.icon,icon:icon}));
    }else{
      this.iconButtons = IconDB.icons.map((icon)=> new AlloyButtonIcon({className:"btn btn-outline-success btn-sm p-1",name:icon.icon,icon:icon}));
    }
  }
}
