import { Component } from '@angular/core';
import { AlloyLinkLogo } from 'alloymobile-angular';
import LinkLogoDB from './link-logo-page.data.json'
@Component({
  selector: 'app-link-logo-page',
  templateUrl: './link-logo-page.component.html',
  styleUrls: ['./link-logo-page.component.css']
})
export class LinkLogoPageComponent {
  linkLogos: AlloyLinkLogo[];
  usageString: string;
  example: AlloyLinkLogo;
  exampleData: string;
  constructor(){
    this.usageString = '<alloy-link [link]="link"></alloy-link>';
    this.example = new AlloyLinkLogo();
    this.exampleData = JSON.stringify(this.example,null,2);
    this.linkLogos = LinkLogoDB.linkLogos.map((link)=>new AlloyLinkLogo(link))
  }

  linkLogoClick(linkLogo: AlloyLinkLogo){
    this.exampleData = JSON.stringify(linkLogo,null,2);
    this.update();
  }

  update(){
    this.example = new AlloyLinkLogo(JSON.parse(this.exampleData));
  }
}