import { Component } from '@angular/core';
import { AlloyButtonIcon, AlloyIcon, AlloyInputTextIcon, AlloyTabButton } from 'alloymobile-angular';
import IconDB from './icon-page.data.json'
@Component({
  selector: 'alloy-icon-page',
  templateUrl: './icon-page.component.html',
  styleUrls: ['./icon-page.component.css']
})
export class IconPageComponent {
  icons: AlloyIcon[];
  usageString: string;
  example: AlloyIcon;
  exampleData: string;
  search: AlloyInputTextIcon;
  constructor(){
    this.usageString = '<alloy-icon [icon]="icon"></alloy-icon>';
    this.example = new AlloyIcon();
    this.exampleData = JSON.stringify(this.example.tostring(),null,2);
    this.icons = IconDB.icons.map((icon)=>new AlloyIcon(icon));
    this.search = new AlloyInputTextIcon(IconDB.search);
  }

  iconClick(icon: AlloyIcon){
    this.exampleData = JSON.stringify(icon.tostring(),null,2);
    this.update();
  }

  update(){
    this.example = new AlloyIcon(JSON.parse(this.exampleData));
  }

  getText(icon){
    let filterIcons = IconDB.icons.filter(i=> i.icon.toLowerCase().includes(icon.search.toLowerCase()));
    if(filterIcons != undefined){
      this.icons = filterIcons.map((icon)=>new AlloyIcon(icon));
    }else{
      this.icons = IconDB.icons.map((icon)=>new AlloyIcon(icon));
    }
  }
}
