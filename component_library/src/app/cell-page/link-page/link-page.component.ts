import { Component } from '@angular/core';
import { AlloyLink } from 'alloymobile-angular';
import LinkDB from './link-page.data.json'

@Component({
  selector: 'app-link-page',
  templateUrl: './link-page.component.html',
  styleUrls: ['./link-page.component.css']
})
export class LinkPageComponent {
  links: AlloyLink[];
  usageString: string;
  example: AlloyLink;
  exampleData: string;
  constructor(){
    this.usageString = '<alloy-link-icon [linkIcon]="linkIcon"></alloy-link>';
    this.exampleData = JSON.stringify(LinkDB.example,null,2);
    this.example = new AlloyLink(this.exampleData);
    this.links = LinkDB.links.map((link)=>new AlloyLink(link))
  }

  linkClick(link: AlloyLink){
    this.exampleData = JSON.stringify(link,null,2);
    this.update();
  }

  update(){
    this.example = new AlloyLink(JSON.parse(this.exampleData));
  }
}
