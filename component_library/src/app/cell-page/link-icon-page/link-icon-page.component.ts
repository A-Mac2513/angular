import { Component } from '@angular/core';
import { AlloyLinkIcon } from 'alloymobile-angular';
import LinkIconDB from './link-icon-page.data.json'
@Component({
  selector: 'app-link-icon-page',
  templateUrl: './link-icon-page.component.html',
  styleUrls: ['./link-icon-page.component.css']
})
export class LinkIconPageComponent {
  linkIcons: AlloyLinkIcon[];
  usageString: string;
  example: AlloyLinkIcon;
  exampleData: string;
  constructor(){
    this.usageString = '<alloy-link [link]="link"></alloy-link>';
    this.example = new AlloyLinkIcon();
    this.exampleData = JSON.stringify(this.example.tostring(),null,2);
    this.linkIcons = LinkIconDB.linkIcons.map((link)=>new AlloyLinkIcon(link))
  }

  linkIconClick(linkIcon: AlloyLinkIcon){
    this.exampleData = JSON.stringify(linkIcon.tostring(),null,2);
    this.update();
  }

  update(){
    this.example = new AlloyLinkIcon(JSON.parse(this.exampleData));
  }
}
