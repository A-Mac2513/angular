import { Component } from '@angular/core';
import { AlloyInputTextIcon, AlloyLinkIcon, AlloyTabButton } from 'alloymobile-angular';
import IconDB from '../icon-page/icon-page.data.json'
@Component({
  selector: 'app-icon-link-page',
  templateUrl: './icon-link-page.component.html',
  styleUrls: ['./icon-link-page.component.css']
})
export class IconLinkPageComponent {
  iconLinks: AlloyLinkIcon[];
  usageString: string;
  example: AlloyLinkIcon;
  exampleData: string;
  search: AlloyInputTextIcon;
  constructor(){
    this.iconLinks = IconDB.icons.map((icon)=> new AlloyLinkIcon({className:"btn btn-outline-success btn-sm p-1",link:"https://alloymobile.com",icon:icon}));
    this.usageString = '<alloy-icon-link [iconLink]="iconLink"></alloy-icon-link>';
    this.example = new AlloyLinkIcon();
    this.exampleData = JSON.stringify(this.example.tostring(),null,2);
    this.search = new AlloyInputTextIcon(IconDB.search);
  }

  iconClick(linkIcon: AlloyLinkIcon){
    this.exampleData = JSON.stringify(linkIcon.tostring(),null,2);
    this.update();
  }

  update(){
    this.example = new AlloyLinkIcon(JSON.parse(this.exampleData));
  }

  getText(icon){
    let filterIcons = IconDB.icons.filter(i=> i.icon.toLowerCase().includes(icon.search.toLowerCase()));
    if(filterIcons != undefined){
      this.iconLinks = filterIcons.map((icon)=> new AlloyLinkIcon({className:"btn btn-outline-success btn-sm p-1",link:"https://alloymobile.com",icon:icon}));
    }else{
      this.iconLinks = IconDB.icons.map((icon)=> new AlloyLinkIcon({className:"btn btn-outline-success btn-sm p-1",link:"https://alloymobile.com",icon:icon}));
    }
  }
}
