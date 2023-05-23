import { Component } from '@angular/core';
import { AlloyFooter } from 'alloymobile-angular';
import FooterDB from './footer-page.data.json';
@Component({
  selector: 'app-footer-page',
  templateUrl: './footer-page.component.html',
  styleUrls: ['./footer-page.component.css']
})
export class FooterPageComponent {
  footer: AlloyFooter;
  usageString: string;
  exampleData: string;
  constructor(){
    this.usageString = '<alloy-footer [footer]="footer"></alloy-footer>';
    this.footer = new AlloyFooter(FooterDB.footer);
    this.exampleData = JSON.stringify(this.footer.toString(),null,2);
  }

  footerClick(footer: AlloyFooter){
    this.exampleData = JSON.stringify(footer.toString(),null,2);
    this.update();
  }

  update(){
    this.footer = new AlloyFooter(JSON.parse(this.exampleData));
  }
}
